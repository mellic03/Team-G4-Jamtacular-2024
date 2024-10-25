
export default class vec2
{
    private static temp = new vec2(0, 0);
    x: number;
    y: number;

    constructor( x: number = 0.0, y: number = 0.0 )
    {
        this.x = x;
        this.y = y;
    }

    from( x: number, y: number )
    {
        this.x = x;
        this.y = y;
    }

    copy( v: vec2 )
    {
        this.x = v.x;
        this.y = v.y;
    }

    add( v: vec2 )
    {
        this.x += v.x;
        this.y += v.y;
    }

    sub( v: vec2 )
    {
        this.x -= v.x;
        this.y -= v.y;
    }

    mul( n: number )
    {
        this.x *= n;
        this.y *= n;
    }

    div( n: number )
    {
        this.x /= n;
        this.y /= n;
    }

    magSq(): number
    {
        return this.x*this.x + this.y*this.y;
    }

    mag(): number
    {
        return Math.sqrt(this.magSq());
    }

    normalize(): void
    {
        const len = this.mag();
        this.x /= len;
        this.y /= len;
    }

    distSq( v: vec2 ): number
    {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return dx*dx + dy*dy;
    }

    dist( v: vec2 ): number
    {
        return Math.sqrt(this.distSq(v));
    }

    floor()
    {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
    }

    direction( start: vec2, end: vec2 )
    {
        this.copy(end);
        this.sub(start);
    }

    normalizedDirection( start: vec2, end: vec2 )
    {
        this.direction(start, end);
        this.normalize();
    }

    normalizeMul( n: number ): void
    {
        this.normalize();
        this.mul(n);
    }

    rand( min: number, max: number ): void
    {
        this.x = random(min, max);
        this.y = random(min, max);
    }

    angle()
    {
        return atan2(this.y, this.x);
    }

    /** Rotate a vector theta radians about the origin.
     * 
     * @param theta Angle in radians
     */
    rotate( theta: number )
    {
        const S = Math.sin(theta);
        const C = Math.cos(theta);

        const x = this.x;
        const y = this.y;

        this.x = (C*x - S*y);
        this.y = (S*x + C*y);
    }

    moveTo( v: vec2, speed: number )
    {
        vec2.temp.direction(this, v);
        const m2 = this.magSq();

        if (m2 == 0)
        {
            return;
        }

        vec2.temp.mul(speed / Math.sqrt(m2));
        this.add(vec2.temp);
    }
};

