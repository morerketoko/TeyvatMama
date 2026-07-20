# IS-001: Introduce InputService Foundation

## Goal

建立统一的输入服务层 InputService，作为所有输入的统一入口。

## Background

目前快捷键逻辑分散在 main.js 中，与 Native Module 直接耦合。
需要一个统一的输入服务层来集中管理。

## Architecture

InputService -> Native (WH_KEYBOARD_LL Hook) -> Windows API

## Files Created

- src/services/input/InputService.js
- src/services/input/ShortcutRegistry.js
- src/services/input/ShortcutState.js

## Files Modified

- src/main/main.js — use InputService
- src/main/preload.js — add input-* IPC channels

## Status

Completed in IS-001.
