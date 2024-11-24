## clip-path
- does what it says, clip the element at a specific shape and place

## cubic-bezier
- a function to create a cubic bezier curve
- and i will probably never gonna understand it
- but it is cool and often used to define the animation timing, for easing in and out

## animation
### transform origin
- when you use transform, you can define the origin of the transform
  - the origin is the point around which the transform is applied
  - by default, the origin is the center of the element
  - but you can change it to any point

```css
.box {
    transform: rotate(45deg);
    transform-origin: 50% 50%;
}
```
- the above will rotate the element around the center of the element

```css
.sun {
    position: absolute;
    z-index: 2;
    top: 7px;
    left: 73px;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background: #FFEF00;
    transform-origin: 50% 400%;
    animation: sun-goes-down 4s cubic-bezier(.4,0,.49,1) infinite;
}
```
- the above will rotate the element around the point (50%, 400%)

## todo
- to be very honest, my brain cannot handle the other part for now. i will stop here
- i will try to do the other part later
[codepen](https://codepen.io/roydigerhund/pen/PZxpKO)
