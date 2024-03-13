# Astraea UI

[![npm version](https://img.shields.io/npm/v/astraea-ui.svg?style=flat)](https://www.npmjs.com/package/astraea-ui)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@main/badge/badge-storybook.svg)](https://andriimaksymov.github.io/astraea-ui)

## Description

Astraea UI is a collection of reusable components and styles for building beautiful user interfaces in React.

## Features

Provide 20+ high quality general purpose components

*  🛠   Components are very flexible
*  🛠️   Support color customization
*  💡   Support WebStorm syntax highlighting
*  💡   Support the Typescript

## Installation

You can install Your UI Library Name via npm:

```bash
npm install --save astraea-ui
```

Import required astraea-ui components within src/App.js file or your custom component files:

```bash
import { Button } from 'astraea-ui'
```

## Customization CSS Variables

### General Variables

- `--astraea-ui-color-primary-main`: Specifies the primary color used throughout the library.
- `--astraea-ui-color-primary-light`: Specifies a lighter shade of the primary color.
- `--astraea-ui-color-primary-dark`: Specifies a darker shade of the primary color.
- `--astraea-ui-color-secondary-main`: Specifies the secondary color used throughout the library.
- `--astraea-ui-color-secondary-light`: Specifies a lighter shade of the secondary color.
- `--astraea-ui-color-secondary-dark`: Specifies a darker shade of the secondary color.
- `--astraea-ui-color-info-main`: Specifies the info color used throughout the library.
- `--astraea-ui-color-success-main`: Specifies the success color used throughout the library.
- `--astraea-ui-color-error-main`: Specifies the error color used throughout the library.
- `--astraea-ui-color-warning-main`: Specifies the warning color used throughout the library.
- `--astraea-ui-color-muted-main`: Specifies the muted color used throughout the library.

### Shadow Elevation Variables

- `--astraea-ui-shadow-elevation-1`: Defines a subtle shadow effect with a low elevation.
- `--astraea-ui-shadow-elevation-2`: Offers a slightly stronger shadow effect.
- `--astraea-ui-shadow-elevation-3`: Provides a more pronounced shadow effect.
- `--astraea-ui-shadow-elevation-4`: Introduces a strong shadow effect with a substantial elevation.
- `--astraea-ui-shadow-elevation-5`: Represents the highest elevation.

### Border Radius Variables

- `--astraea-ui-border-radius-small`: Specifies the small border radius for elements.
- `--astraea-ui-border-radius-small`: Specifies the medium border radius for elements.
- `--astraea-ui-border-radius-small`: Specifies the large border radius for elements.

### How to Use

To customize the appearance of elements in your application, simply override these CSS variables with your desired values in your stylesheet.

```css
:root {
  --astraea-ui-color-primary-main: #007bff;
  --astraea-ui-color-secondary-main: #6c757d;
  /* Add more customizations here */
}