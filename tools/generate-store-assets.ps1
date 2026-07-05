Add-Type -AssemblyName System.Drawing

$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$iconDir = Join-Path $root "assets\icons"
$storeDir = Join-Path $root "assets\store"
New-Item -ItemType Directory -Force -Path $iconDir | Out-Null
New-Item -ItemType Directory -Force -Path $storeDir | Out-Null

$navy = [System.Drawing.Color]::FromArgb(6, 39, 84)
$blue = [System.Drawing.Color]::FromArgb(24, 94, 184)
$red = [System.Drawing.Color]::FromArgb(232, 42, 50)
$green = [System.Drawing.Color]::FromArgb(19, 145, 91)
$white = [System.Drawing.Color]::White
$bg = [System.Drawing.Color]::FromArgb(242, 248, 255)
$grid = [System.Drawing.Color]::FromArgb(203, 218, 238)
$ink = [System.Drawing.Color]::FromArgb(13, 34, 63)
$muted = [System.Drawing.Color]::FromArgb(88, 103, 125)
$panel = [System.Drawing.Color]::FromArgb(250, 252, 255)

function New-Bitmap($width, $height) {
  return New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
}

function New-Font($size, $style = [System.Drawing.FontStyle]::Regular) {
  return New-Object System.Drawing.Font("Segoe UI", $size, $style, [System.Drawing.GraphicsUnit]::Pixel)
}

function New-RoundRect($x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function Draw-GridCard($g, $x, $y, $w, $h, $scale) {
  $radius = [int](12 * $scale)
  $card = New-RoundRect $x $y $w $h $radius
  $g.FillPath((New-Object System.Drawing.SolidBrush($white)), $card)
  $g.DrawPath((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(188, 207, 232), [Math]::Max(1, [int](2 * $scale)))), $card)

  $headerH = [int](34 * $scale)
  $header = New-RoundRect $x $y $w $headerH $radius
  $g.FillPath((New-Object System.Drawing.SolidBrush($navy)), $header)

  $headerFont = New-Font ([int](15 * $scale)) ([System.Drawing.FontStyle]::Bold)
  $g.DrawString("Weekly plan", $headerFont, (New-Object System.Drawing.SolidBrush($white)), $x + [int](16 * $scale), $y + [int](7 * $scale))

  $gridX = $x + [int](18 * $scale)
  $gridY = $y + $headerH + [int](14 * $scale)
  $gridW = $w - [int](36 * $scale)
  $gridH = $h - $headerH - [int](30 * $scale)
  $pen = New-Object System.Drawing.Pen($grid, [Math]::Max(1, [int](1 * $scale)))

  for ($i = 0; $i -le 5; $i++) {
    $lineX = $gridX + [int]($gridW * $i / 5)
    $g.DrawLine($pen, $lineX, $gridY, $lineX, $gridY + $gridH)
  }
  for ($i = 0; $i -le 4; $i++) {
    $lineY = $gridY + [int]($gridH * $i / 4)
    $g.DrawLine($pen, $gridX, $lineY, $gridX + $gridW, $lineY)
  }

  Draw-Block $g ($gridX + [int]($gridW * 0.08)) ($gridY + [int]($gridH * 0.2)) ([int]($gridW * 0.28)) ([int]($gridH * 0.18)) $blue "COMP"
  Draw-Block $g ($gridX + [int]($gridW * 0.44)) ($gridY + [int]($gridH * 0.44)) ([int]($gridW * 0.3)) ([int]($gridH * 0.18)) $green "INFO"
  Draw-Block $g ($gridX + [int]($gridW * 0.22)) ($gridY + [int]($gridH * 0.68)) ([int]($gridW * 0.26)) ([int]($gridH * 0.16)) $red "ALT"
}

function Draw-Block($g, $x, $y, $w, $h, $color, $text) {
  $block = New-RoundRect $x $y $w $h 7
  $g.FillPath((New-Object System.Drawing.SolidBrush($color)), $block)
  $font = New-Font ([Math]::Max(8, [int]($h * 0.45))) ([System.Drawing.FontStyle]::Bold)
  $format = New-Object System.Drawing.StringFormat
  $format.Alignment = [System.Drawing.StringAlignment]::Center
  $format.LineAlignment = [System.Drawing.StringAlignment]::Center
  $rect = New-Object System.Drawing.RectangleF($x, $y, $w, $h)
  $g.DrawString($text, $font, (New-Object System.Drawing.SolidBrush($white)), $rect, $format)
}

function Draw-Check($g, $x, $y, $size, $circle) {
  if ($circle) {
    $g.FillEllipse((New-Object System.Drawing.SolidBrush($white)), $x, $y, $size, $size)
  }
  $pen = New-Object System.Drawing.Pen($red, [Math]::Max(2, [int]($size * 0.1)))
  $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
  $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
  $x1 = $x + [int]($size * 0.25)
  $y1 = $y + [int]($size * 0.55)
  $x2 = $x + [int]($size * 0.43)
  $y2 = $y + [int]($size * 0.72)
  $x3 = $x + [int]($size * 0.76)
  $y3 = $y + [int]($size * 0.3)
  $p1 = New-Object System.Drawing.Point($x1, $y1)
  $p2 = New-Object System.Drawing.Point($x2, $y2)
  $p3 = New-Object System.Drawing.Point($x3, $y3)
  $g.DrawLines($pen, @($p1, $p2, $p3))
}

function Draw-Icon($size, $path) {
  $bmp = New-Bitmap $size $size
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear($white)

  $pad = [int]($size * 0.08)
  $outer = New-RoundRect $pad $pad ($size - $pad * 2) ($size - $pad * 2) ([int]($size * 0.18))
  $g.FillPath((New-Object System.Drawing.SolidBrush($navy)), $outer)
  $g.FillPath((New-Object System.Drawing.SolidBrush($red)), (New-RoundRect $pad $pad ([int]($size * 0.22)) ($size - $pad * 2) ([int]($size * 0.12))))

  $cardX = [int]($size * 0.32)
  $cardY = [int]($size * 0.23)
  $cardW = [int]($size * 0.52)
  $cardH = [int]($size * 0.54)
  $card = New-RoundRect $cardX $cardY $cardW $cardH ([int]($size * 0.07))
  $g.FillPath((New-Object System.Drawing.SolidBrush($white)), $card)

  $pen = New-Object System.Drawing.Pen($grid, [Math]::Max(1, [int]($size * 0.018)))
  for ($i = 1; $i -le 3; $i++) {
    $lineX = $cardX + [int]($cardW * $i / 4)
    $g.DrawLine($pen, $lineX, $cardY + [int]($size * 0.07), $lineX, $cardY + $cardH - [int]($size * 0.05))
  }
  for ($i = 1; $i -le 2; $i++) {
    $lineY = $cardY + [int]($cardH * $i / 3)
    $g.DrawLine($pen, $cardX + [int]($size * 0.04), $lineY, $cardX + $cardW - [int]($size * 0.04), $lineY)
  }
  $g.FillRectangle((New-Object System.Drawing.SolidBrush($blue)), $cardX + [int]($cardW * 0.12), $cardY + [int]($cardH * 0.3), [int]($cardW * 0.27), [int]($cardH * 0.22))
  $g.FillRectangle((New-Object System.Drawing.SolidBrush($green)), $cardX + [int]($cardW * 0.58), $cardY + [int]($cardH * 0.55), [int]($cardW * 0.22), [int]($cardH * 0.17))
  Draw-Check $g ([int]($size * 0.39)) ([int]($size * 0.57)) ([int]($size * 0.42)) $false

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

function Draw-Promo($width, $height, $path, $large) {
  $bmp = New-Bitmap $width $height
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  $g.Clear($bg)

  $left = [int]($width * 0.08)
  $top = [int]($height * 0.17)
  $title = 25
  $subtitle = 13
  if ($large) {
    $title = 62
    $subtitle = 28
  }

  $titleFont = New-Font $title ([System.Drawing.FontStyle]::Bold)
  $subFont = New-Font $subtitle

  $g.DrawString("USYD", $titleFont, (New-Object System.Drawing.SolidBrush($red)), $left, $top)
  if ($large) {
    $g.DrawString("Timetable Planner", $titleFont, (New-Object System.Drawing.SolidBrush($navy)), $left, $top + [int]($title * 0.92))
    $g.FillRectangle((New-Object System.Drawing.SolidBrush($red)), $left, $top + [int]($title * 1.95), [int]($width * 0.18), [int]($height * 0.012))
    $g.DrawString("Plan timetable preferences and avoid clashes", $subFont, (New-Object System.Drawing.SolidBrush($muted)), $left, $top + [int]($title * 2.15))
  } else {
    $g.DrawString("Timetable", $titleFont, (New-Object System.Drawing.SolidBrush($navy)), $left, $top + 28)
    $g.DrawString("Planner", $titleFont, (New-Object System.Drawing.SolidBrush($navy)), $left, $top + 56)
    $g.FillRectangle((New-Object System.Drawing.SolidBrush($red)), $left, $top + 88, 70, 4)
    $g.DrawString("Plan preferences.", $subFont, (New-Object System.Drawing.SolidBrush($muted)), $left, $top + 102)
    $g.DrawString("Avoid clashes.", $subFont, (New-Object System.Drawing.SolidBrush($muted)), $left, $top + 120)
  }

  $footerH = [int]($height * 0.28)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush($navy)), 0, $height - $footerH, $width, $footerH)

  if ($large) {
    Draw-GridCard $g ([int]($width * 0.58)) ([int]($height * 0.13)) ([int]($width * 0.34)) ([int]($height * 0.62)) 2.15
  } else {
    Draw-GridCard $g 250 36 158 152 1.0
  }

  $labels = @("Capture", "Compare", "Export")
  $labelFontSize = 10
  $circleSize = 28
  if ($large) {
    $labelFontSize = 22
    $circleSize = 56
  }
  $labelFont = New-Font $labelFontSize ([System.Drawing.FontStyle]::Bold)
  for ($i = 0; $i -lt $labels.Count; $i++) {
    $x = $left + [int]($width * 0.28 * $i)
    $y = $height - $footerH + [int](($footerH - $circleSize) / 2)
    Draw-Check $g $x $y $circleSize $true
    $g.DrawString($labels[$i], $labelFont, (New-Object System.Drawing.SolidBrush($white)), $x + $circleSize + [int]($circleSize * 0.35), $y + [int]($circleSize * 0.26))
  }

  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

function Draw-BrowserFrame($g, $width, $height) {
  $g.Clear([System.Drawing.Color]::FromArgb(245, 247, 250))
  $topH = 34
  $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(233, 238, 245))), 0, 0, $width, $topH)
  $g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 92, 87))), 14, 11, 10, 10)
  $g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 190, 46))), 30, 11, 10, 10)
  $g.FillEllipse((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(39, 201, 63))), 46, 11, 10, 10)
  $bar = New-RoundRect 72 8 330 18 9
  $g.FillPath((New-Object System.Drawing.SolidBrush($white)), $bar)
  $urlFont = New-Font 9
  $g.DrawString("timetable.sydney.edu.au", $urlFont, (New-Object System.Drawing.SolidBrush($muted)), 88, 10)
}

function Draw-TimetablePageMock($g, $x, $y, $w, $h, $variant) {
  $g.FillRectangle((New-Object System.Drawing.SolidBrush($white)), $x, $y, $w, $h)
  $g.DrawRectangle((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(218, 225, 235), 1)), $x, $y, $w, $h)

  $titleFont = New-Font 22 ([System.Drawing.FontStyle]::Bold)
  $g.DrawString("SYDNEY TIMETABLE", $titleFont, (New-Object System.Drawing.SolidBrush($ink)), $x + 22, $y + 20)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 55, 59))), $x + 22, $y + 62, $w - 44, 28)
  $g.DrawString("Allocate+", (New-Font 18 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($white)), $x + 34, $y + 64)

  $leftPanel = New-RoundRect ($x + 22) ($y + 105) 150 218 5
  $g.FillPath((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(250, 250, 250))), $leftPanel)
  $g.DrawPath((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(202, 207, 214), 1)), $leftPanel)
  $g.DrawString("Semester 2", (New-Font 11 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 36, $y + 119)
  $units = @("COMP5310", "INFO5990", "INFO5995", "INFO6007")
  for ($i = 0; $i -lt $units.Count; $i++) {
    $rowY = $y + 145 + $i * 42
    $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(242, 244, 247))), $x + 34, $rowY, 126, 30)
    $g.DrawString($units[$i], (New-Font 10 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 42, $rowY + 7)
  }

  $tableX = $x + 190
  $tableY = $y + 105
  $tableW = $w - 212
  $tableH = 218
  $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 255, 255))), $tableX, $tableY, $tableW, $tableH)
  $g.DrawRectangle((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(202, 207, 214), 1)), $tableX, $tableY, $tableW, $tableH)
  $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(52, 55, 59))), $tableX, $tableY, $tableW, 32)
  $g.DrawString("Lecture preferences", (New-Font 11 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($white)), $tableX + 12, $tableY + 8)

  $headers = @("Activity", "Day", "Time", "Free", "Campus")
  for ($i = 0; $i -lt $headers.Count; $i++) {
    $cellX = $tableX + 12 + $i * 46
    $g.DrawString($headers[$i], (New-Font 9 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $cellX, $tableY + 48)
  }

  $rows = @(
    @("01", "Mon", "19:00", "110", "Camperdown"),
    @("02", "Tue", "17:00", "76", "Camperdown"),
    @("03", "Wed", "10:00", "45", "Online")
  )
  for ($r = 0; $r -lt $rows.Count; $r++) {
    $rowY = $tableY + 72 + $r * 34
    $g.FillRectangle((New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(248, 249, 251))), $tableX + 10, $rowY, $tableW - 20, 28)
    for ($c = 0; $c -lt $rows[$r].Count; $c++) {
      $cellX = $tableX + 14 + $c * 46
      $g.DrawString($rows[$r][$c], (New-Font 9), (New-Object System.Drawing.SolidBrush($ink)), $cellX, $rowY + 7)
    }
  }
}

function Draw-SidePanelMock($g, $x, $y, $w, $h, $state) {
  $g.FillRectangle((New-Object System.Drawing.SolidBrush($panel)), $x, $y, $w, $h)
  $g.DrawRectangle((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(205, 214, 227), 1)), $x, $y, $w, $h)
  $g.DrawString("USYD Timetable Planner", (New-Font 15 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($navy)), $x + 18, $y + 18)
  $g.DrawString("Plan preferences and avoid clashes", (New-Font 9), (New-Object System.Drawing.SolidBrush($muted)), $x + 18, $y + 42)

  $button = New-RoundRect ($x + 18) ($y + 70) ($w - 36) 30 5
  $g.FillPath((New-Object System.Drawing.SolidBrush($red)), $button)
  $g.DrawString("Read Current Page", (New-Font 10 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($white)), $x + 76, $y + 77)

  $button2 = New-RoundRect ($x + 18) ($y + 108) ($w - 36) 30 5
  $g.FillPath((New-Object System.Drawing.SolidBrush($navy)), $button2)
  $g.DrawString("Generate Plan", (New-Font 10 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($white)), $x + 88, $y + 115)

  $status = New-RoundRect ($x + 18) ($y + 150) ($w - 36) 34 5
  $statusBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(230, 246, 238))
  if ($state -eq "export") {
    $statusBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(232, 241, 255))
  }
  $g.FillPath($statusBrush, $status)
  $statusText = "Captured 12 options"
  if ($state -eq "plan") {
    $statusText = "Plan generated"
  }
  if ($state -eq "export") {
    $statusText = "CSV export ready"
  }
  $g.DrawString($statusText, (New-Font 10 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 30, $y + 159)

  $sectionY = $y + 194
  if ($state -eq "capture") {
    $g.DrawString("Captured Activities", (New-Font 12 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 18, $sectionY)
    $items = @("COMP5310 Lecture", "COMP5310 Tutorial", "INFO5990 Tutorial")
    for ($i = 0; $i -lt $items.Count; $i++) {
      $itemY = $sectionY + 28 + $i * 32
      $item = New-RoundRect ($x + 18) $itemY ($w - 36) 24 4
      $g.FillPath((New-Object System.Drawing.SolidBrush($white)), $item)
      $g.DrawPath((New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 226, 235), 1)), $item)
      $g.DrawString($items[$i], (New-Font 9), (New-Object System.Drawing.SolidBrush($ink)), $x + 28, $itemY + 5)
    }
  } elseif ($state -eq "plan") {
    $g.DrawString("Weekly Timetable Preview", (New-Font 12 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 18, $sectionY)
    Draw-GridCard $g ($x + 18) ($sectionY + 28) ($w - 36) 96 0.54
  } else {
    $g.DrawString("Preference Order", (New-Font 12 ([System.Drawing.FontStyle]::Bold)), (New-Object System.Drawing.SolidBrush($ink)), $x + 18, $sectionY)
    $prefs = @("1. COMP5310 Lecture 02", "2. INFO5990 Tutorial 27", "3. INFO6007 Tutorial 10")
    for ($i = 0; $i -lt $prefs.Count; $i++) {
      $prefY = $sectionY + 30 + $i * 34
      $pref = New-RoundRect ($x + 18) $prefY ($w - 36) 26 4
      $g.FillPath((New-Object System.Drawing.SolidBrush($white)), $pref)
      $g.DrawString($prefs[$i], (New-Font 9), (New-Object System.Drawing.SolidBrush($ink)), $x + 28, $prefY + 6)
    }
  }
}

function Draw-Screenshot($path, $state) {
  $bmp = New-Bitmap 640 400
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
  $g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit
  Draw-BrowserFrame $g 640 400
  Draw-TimetablePageMock $g 18 48 382 324 $state
  Draw-SidePanelMock $g 404 48 218 324 $state
  $bmp.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
  $g.Dispose()
  $bmp.Dispose()
}

Draw-Icon 16 (Join-Path $iconDir "icon16.png")
Draw-Icon 48 (Join-Path $iconDir "icon48.png")
Draw-Icon 128 (Join-Path $iconDir "icon128.png")
Copy-Item (Join-Path $iconDir "icon128.png") (Join-Path $storeDir "store-icon-128.png") -Force
Draw-Promo 440 280 (Join-Path $storeDir "promo-small-440x280.png") $false
Draw-Promo 1400 560 (Join-Path $storeDir "promo-top-1400x560.png") $true
Draw-Screenshot (Join-Path $storeDir "screenshot-1-capture-640x400.png") "capture"
Draw-Screenshot (Join-Path $storeDir "screenshot-2-plan-640x400.png") "plan"
Draw-Screenshot (Join-Path $storeDir "screenshot-3-export-640x400.png") "export"
