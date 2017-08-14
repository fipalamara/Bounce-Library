from Tkinter import * 
import simplegui

# Initialize globals
WIDTH = 600
HEIGHT = 400
BALL_RADIUS = 20

ball_pos = [WIDTH / 2, HEIGHT / 2]
print "Starting Position of the Ball:", ball_pos
print ""
vel = [-40 / 60,  5 / 60]
print "Velocity", vel
print ""
print "This means that after each time interval, the ball will move 0.666 to the left and 0.8333... downwards"
print "That is, we will subtract 0.666 from the current x value and add 0.833 to the current y value."
print "For now, lets just focus on the x axis" 
print ""

# define event handlers
def draw(canvas):
    # Update ball position
    ball_pos[0] += vel[0]
    print "Current Position", ball_pos[0]
    ball_pos[1] += vel[1]
    
    # collide and reflect off of left hand side of canvas
    if ball_pos[0] <= BALL_RADIUS:
        vel[0] = - vel[0]
        print ""
        print "Note:"
        print "Though it says that the position of the ball on the x axis is 19.33..," 
        print "remember that the position is meassured only from the midpoint of the ball."
        print "What we care about is the outer edge of the ball. Why? Because that is the point"
        print "where the ball bounces off the wall and moves into the opposite direction"
        print "(i.e. from left to right). Since the radius of the ball is 20, we find the"
        print "position of the outer edge of the ball by doing 'midpoint - radius'. In this"
        print "case being '(midpoint) 19.33 - 20 (radius)'. The result is less than 0 and"
        print "we have reached the point where we want the ball to bounce off. From now on,"
        print "we will no longer subract 0.66, but add 0.66 to the value on the x axis"
        print ""
        print "Point after Collision", vel
        print ""
    

    
    # Draw ball
    canvas.draw_circle(ball_pos, BALL_RADIUS, 2, "Red", "White")

# create frame
frame = simplegui.create_frame("Ball physics", WIDTH, HEIGHT)

# register event handlers
frame.set_draw_handler(draw)

# start frame
frame.start()
