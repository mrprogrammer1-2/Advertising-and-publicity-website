This creates the scroll-triggered text reveal effect you saw in the website. Here's how it works:
Key Components:

Text Splitting: The text is split into individual words wrapped in <span> elements for individual control
ScrollTrigger Setup: Uses GSAP's ScrollTrigger plugin to tie animations to scroll position
Progressive Reveal: As you scroll, words gradually change from dim gray to bright white
Smooth Animation: The scrub: 1 property makes the animation smoothly follow scroll position

Important Setup Notes:
You'll need to install GSAP with ScrollTrigger:
bashnpm install gsap
Key Animation Properties:

scrub: 1 - Makes animation directly tied to scroll position
start: "top 80%" - Animation starts when element is 80% down the viewport
end: "bottom 20%" - Animation ends when element bottom is 20% from top
Progressive word revelation based on scroll progress

Customization Options:

Change scrub value for different scroll sensitivity
Adjust start/end positions for different trigger points
Modify colors and opacity for different reveal effects
Add stagger effects for more complex animations

The effect creates that satisfying connection between scroll position and text revelation that makes users want to keep scrolling to reveal the complete message.
