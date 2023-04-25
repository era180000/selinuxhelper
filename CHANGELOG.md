# Change Log

All notable changes to the "selinuxhelper" extension will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)

## [Unreleased]

## [0.2.2]: 2023-04-21

### [Added]

    -Fixed file read error with proper handling. Will just skip unreadable files now
    -Added f12 goto functionality. Known Issue: Goes to top of file instead of correct in-file location
    -Changed hover to hover in place

## [0.2.1]: 2023-04-21

### [Added]

    -Fixed file size error when parsing 2GB+ file
    -Fixed symbolic link parsing error (Linux)
    -Added definitionType to parser for dynamic code completion
    -Added dynamic code completion with file location
    -Removed optional_policy from default keyword list (it's a defined macro not a default function)

## [0.2.0]: 2023-04-21

### [Added]

    -Finished if and spt parsing for go to, hover, and code completion
    -Added Go To functionality (LS)
    -Added Hover functionality (LS)
    -Added handlers for onOpen, onSave, onDidChangeWatchedFile for reparsing
    -Added automatic parsing of all workspace folders and include paths

## [0.1.0]: 2023-03-31

### [Added]

    -Finished Syntax Highlighting
    -Implemented base language server
    -Finished defualt keyword code completion (LS)
    -Added include path setting for future parser (LS)


## [0.0.2]: 2023-03-08

### [Added]

    -Add syntax highlighting for .spt 
    -Updated Readme
    -Updated Changelog

## [0.0.1]: 2023-03-08

### [Added]

    -Syntax Highlighting Initial
