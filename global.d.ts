import * as React from 'react';
import { myTheme } from '@/styles/theme';

type MyTheme = typeof myTheme;
type MyPalette = typeof myTheme.palette;
type MyColor = typeof myTheme.palette.primary;
type MyBackground = typeof myTheme.palette.background;

declare module '@mui/material/styles' {
    interface Theme extends MyTheme {}
    interface Palette extends MyPalette {}
    interface PaletteColor extends MyColor {}
    interface TypeBackground extends MyBackground {}
}

declare module '*.svg' {
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}
