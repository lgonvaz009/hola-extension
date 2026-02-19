// main.ts
/**
 * Bloques personalizados
 */
//% color=#0fbc11 weight=100 icon=""
namespace hola {
    /**
     * Muestra HOLA en la pantalla de LEDs.
     */
    //% block="saludar"
    //% group="Básico"
    export function saludar(): void {
        basic.showString("HOLA")
    }
}

