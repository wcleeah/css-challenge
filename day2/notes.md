## Onclick transition
### animation
- Animation can be triggered by changing the state / class of an element
  - once the class is changed, the animation will start
- The general idea is to have a keyframe that defines the state of the element at different points in time
- The animation will then play through the keyframes in order

#### Properties
- animation-name: the keyframe to apply.
- animation-duration: how long the animation should take (e.g., 1s).
- animation-timing-function: determines the speed curve of the animation.
- animation-delay: delay before the animation starts.
The above can be also apply using the animation shorthand, but it is kind of ambiguous, since the shorthand will apply the value by type, not purely by order.
- but one thing is that if you have multiple animations, you have to use the shorthand

## Notes on transform: translate
- the effect does not retain after the animation is done, even the fill mode is forwards
- to keep the effect, actually change the attribute (i.e. top, left, etc.) instead of the transform


## notepen
https://codepen.io/harrysc/pen/zYgWyKM
### template
https://100dayscss.com/days/2/

note i did not do the reverse animation, i am just being lazy here
