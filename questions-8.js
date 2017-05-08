Questions:

Why can you only use certain pins for analogWrite()?

Because you have to use pins that have a high resistance, otherwise there could be a short.

What is the range the map() function maps the value to? Why this range?

The range map function gets added to anything that is going to be adjusted- for an led light or the potentiometer code. it can go from a low to a high value and can assign all the numbers inbetween.
