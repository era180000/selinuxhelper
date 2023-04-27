# **SElinuxhelper README**

![SELinux Penguin](client/images/selinux-penguin.png)

SElinuxhelper is a VS Code exentsion that allows code completion, intellisense of definitions, and syntax highlighting for various types of SELinux files. 

The following are the supported file types: **.te, .if, .fc, and .spt.**

# **Features**

## <u> Definition Hover and Go-To </u>

To see the definition hovering over a term.
Use Ctrl + Click to open the file location containing the definition
Use F12 while cursor is in a word or it is highlighted to jump to the file location of the definition

Example:

![SELinux Peek](client/images/SELinux-Peek-Example.png)

## <u> Comment Highlighting </u>

Comments in all files are colored **<span style="color:#6a9955">green</span>**.

Example:

![SELinux Comments](client/images/SELinux-Comments-Highlighting-Example.png)

## <u> .te Syntax Highlighting </u>

For .te files, the following are the colors for each file specific blocks of code:

* `gen_require`, `type`, and `alias` are colored **<span style="color:#569cd6">blue.</span>**
* `dev_node` is colored **<span style="color:#b482da">purple.</span>**
* Parenthesis for `gen_require` and `dev_node` are colored **<span style="color:#ffc000">yellow.</span>**

Example:

![SELinux te](client/images/SELinux-te-Highlighting-Example.png)

## <u> .if Syntax Highlighting </u>

For .if files, the following are the colors for each file specific blocks of code:

* `interface`, `gen_require`, `type`, and `allow` are colored **<span style="color:#569cd6">blue.</span>**

Example:

![SELinux if](client/images/SELinux-if-Highlighting-Example.png)

## <u> .fc Syntax Highlighting </u>

For .fc files, the following are the colors for each file specific blocks of code:

* `gen_context` is colored **<span style="color:#569cd6">blue.</span>**
* Parenthesis for `gen_context` are colored **<span style="color:#ffc000">yellow.</span>**

Example:
 
![SELinux fc](client/images/SELinux-fc-Highlighting-Example.png)

## <u> .spt Syntax Highlighting </u>

For .spt files, the following are the colors for each file specific blocks of code:

* `define` is colored **<span style="color:#569cd6">blue.</span>**
* Parenthesis for `define` and backticks not surrounding brackets are colored **<span style="color:#ffc000">yellow.</span>**
* Brackets and backticks surrounding those brackets are colored **<span style="color:#ff33cc">pink.</span>**

Example:

![SELinux spt](client/images/SELinux-spt-Highlighting-Example.png)

# Requirements

No additional requirements for this extension.

# Extension Settings

## Path Inclusion
Users are able to specify the include in intellisense definition parsing. The default is `/user/share/selinux/devel/include/`.

This setting can be edited under `File > Preferences > Settings` and searching `SELinux`. To add several paths, seperate them with a comma.

The `settings.json` appears as follows:

![SELinux Settings](client/images/SELinux-dpExample.png)

# Release Notes

## Releases
## <u> 1.0.0 </u>
[2023-04-27]
### Added

    - Intital realease of SELinuxHelper
## Initial Prereleases

## <u> 0.2.3 </u>
[2023-04-21]

### Fixed

    -Fixed f12 goto functionality

## <u> 0.2.2 </u>
[2023-04-21]
### Added

    -Added f12 goto functionality. Known Issue: Goes to top of file instead of correct in-file location
    -Changed hover to hover in place
    
### Fixed

    -Fixed file read error with proper handling. Will just skip unreadable files now

## <u> 0.2.1 </u>
[2023-04-21]
### Added

    -Added definitionType to parser for dynamic code completion
    -Added dynamic code completion with file location
    -Removed optional_policy from default keyword list (it's a defined macro not a default function)

### Fixed

    -Fixed file size error when parsing 2GB+ file
    -Fixed symbolic link parsing error (Linux)
    
## <u> 0.2.0 </u>
[2023-04-21]
### Added

    -Finished if and spt parsing for go to, hover, and code completion
    -Added Go To functionality (LS)
    -Added Hover functionality (LS)
    -Added handlers for onOpen, onSave, onDidChangeWatchedFile for reparsing
    -Added automatic parsing of all workspace folders and include paths

## <u> 0.1.0 </u>
[2023-03-31]
### Added

    -Finished Syntax Highlighting
    -Implemented base language server
    -Finished defualt keyword code completion (LS)
    -Added include path setting for future parser (LS)


## <u> 0.0.2 </u>
[2023-03-08]
### Added

    -Add syntax highlighting for .spt 
    -Updated Readme
    -Updated Changelog

## <u> 0.0.1 </u>
[2023-03-08]
### Added

    -Syntax Highlighting Initial


# Credits

Developed by Sophia Boisvert, Easton Anderlik, Pranav Pradeep, Matt McCoy, Trevor Tomer, and Zeal Bhatt.

SELinux Logo used under the Creative Commons ShareAlike 2.5 license. Credit to Máirín Duffy.

Link to License: https://creativecommons.org/licenses/by-sa/2.5/

Link to Artist: https://www.deviantart.com/pookstar/gallery

Link to Selinux page: https://selinuxproject.org/ 

