

class IO
{
    constructor()
    {

    }

    keyDown( k )
    {
        return false;
    }

    keyTapped( k )
    {
        return false;
    }

    mouseDown( m )
    {
        return false;
    }

    mouseClicked( m )
    {
        return false;
    }

}


export const keycode = {
    LEFT: 37, RIGHT: 39,
    UP: 38, DOWN: 40,
    SPACE: 32,
    ESC: 27, TAB: 9,
    A: 65, B: 66, C: 67, D: 68,
    E: 69, F: 70, G: 71, H: 72,
    I: 73, J: 74, K: 75, L: 76,
    M: 77, N: 78, O: 79, P: 80,
    Q: 81, R: 82, S: 83, T: 84,
    U: 85, V: 86, W: 87, X: 88,
    Y: 89, Z: 90,
}


export const mousebutton = {
    LEFT: 0, RIGHT: 1, MID: 2
}

