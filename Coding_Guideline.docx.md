Coding Guideline Transcosmos Indonesia 

# 1 General Information (Common) 

## 1-1 Intended Web Browser 

|Smartphone|iOS10 or later: Latest version of Safari|
|---|---|
||Android 5.0 or later: Latest version of Chrome|
|PC|Latest version of Chrome,Mozilla Firefox,Microsoft Edge|



## 1-2 Files and Folder Structure 

root - index.html css - index.css images js 

## 1-3 Format for Each File 

|Character|UTF-8|
|---|---|
|Encoding||
|Newline|CR+LF|
|Indentation|2 half-width spaces|



## 1-4 Writing Paths 

Use relative paths 

## 1-5 Display 

Make sure your layout result is the same as Figma design. We will compare it pixel by <u>pixel.</u> 

# 2 Images 

## 2-1 Using Formats Properly 

|JPEG|Photos<br>minimum 1xquality|
|---|---|
|PNG-24|Images with transparent colors|
|PNG-8|Illustrations, Buttons, Icons, etc. which are with no transparency and can<br>be represented within 256 colors|
|GIF|Do not use this format|



## 2-2 Naming Rules for Image Files 

[image type]_[name]_[two-digit serial number].[extension] use only lowercase letters 

You may omit "name" and "serial number" 

File Name Examples 

|Image Type|Example|
|---|---|
|Logo Images|logo.png|
|Background Images|bg_section.jpg|
|Icon Images|ico_01.png|
|Images in General|img_access_01.jpg|
|Button Images|btn_cancel.png|



# 3 HTML 

## 3-1 DOCTYPE 

<!DOCTYPE html> 

## 3-2 Indentation 

2 half-width spaces However, do not indent for the following; ● From <!DOCTYPE html> until between <body> and</body></html> ● <script> Example <!DOCTYPE html> <html lang="en"> <head> <title>title</title> <link rel="stylesheet" href="sample.css"> </head> <body> <!—content --> <script src="sample.js"></script> </body> </html> 

## 3-3 alt 

● Enter the characters on the image with no changes. ● For images put image name as ALT 

# 4 CSS 

## 4-1 Naming Rules for Class Names 

Use kebab case ( <u>connect the first and second letter with a dash “-“)</u> Example 

.section-block01 

## 4-2 Ordering Properties 

|1|display, position,float,etc.|
|---|---|
|2|width,height,etc.|
|3|margin, padding|
|4|border,background,etc.|
|5|text,fonts,etc.|
|6|Others|



## 4-3 Fonts 

## 4-3-1 Font-Family 

Font-Family: "Inter", “Unbounded”, sans-serif; 

## 4-3-2 Font-Size Unit 

Unit: Rem 

## 4-3-3 Line-Height Unit 

Use unitless values Example line-height: 2; 

## 4-4 Others 

|Breakpoints|Breakpoints media min-width: 768px in PC|
|---|---|
|Hover|Set the hover settings below for button & links in PC<br>Opacity: 0.5<br>Speed: 0.2s|



# 5 JavaScript 

## 5-1 Writing Position 

Write JavaScript just before </body> Example <body> <!—content --> <script src="sample.js"></script> 

</body> </html> 

