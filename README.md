# Hello Cumul8!

[demo](http://cumul8.brettanderson.me)

Here's a list of the features that you've asked me to implement:
- Figure A
 - Focusing on an input removes the label and allows for text entry &#10003;
 - Validation occurs on Eamil and Time inputs. Entering a correct value shows success while entering an invalid value shows an error &#10003;
 - Time can be input wiht hour and/or minute values &#10003;
 - Selecting 'Clear' returns the form to it's original state &#10003;
 - Selected 'Next' moves to figure B &#10003;

- Figure B
 - Displays a loading icon &#10003;
 - Goes to figure C after 1 second &#10003;

- Figure C
 - Selected 'Start Over' returns to figure A &#10003;

## Notes
- I have built this in React, and although it can feel like overkill for such a small project, it makes things like validation easy to reason about.
- I've uploaded this to my personal server, partly for ease of viewing, but also to show that I'm comfortable working with servers and the command line.
- I've used Bootstrap as a CSS framework, and then themed it to my liking.
- I have modified Figure C to include a list of all the logged hours, it is being persisted with LocalStorage. Was easy enough to do.