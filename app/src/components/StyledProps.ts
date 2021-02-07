/*
    PRINCIPIO INTERFACE SEGREGATION
    Esta interfaz engloba las propiedades de los componentes relativas al estilo,
    los componentes que requieren de uso la extienden.
 */

import {CSSProperties} from "react";

export interface StyledProps {
    className?: string;
    style?: CSSProperties;
}
