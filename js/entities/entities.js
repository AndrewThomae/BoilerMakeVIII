/**
 * Player Entity
 */
game.PlayerEntity = me.Entity.extend({

    /**
     * constructor
     */
    init:function (x, y, settings) {
        // call the constructor
        this._super(me.Entity, 'init', [x, y , settings]);
        // max velocities
    this.body.setMaxVelocity(3, 15);
    this.body.setFriction(0.4, 0);

    // set the display to follow our position on both axis
    me.game.viewport.follow(this.pos, me.game.viewport.AXIS.BOTH, 0.4);

    // ensure the player is updated even when outside of the viewport
    this.alwaysUpdate = true;

    // define a basic jumping animation (using all frames)
    this.renderable.addAnimation("jump", [0, 1, 2, 3, 4, 5, 6, 7]);

    // define a basic resting animation (using the first frame)
    this.renderable.addAnimation("rest", [0]);

    // set the resting animation as default
    this.renderable.setCurrentAnimation("rest");
    },

    

    /**
     * update the entity
     */
    update : function (dt) {
      if (me.input.isKeyPressed('left') && me.input.isKeyPressed('jump')) {
        // update the default force
        this.body.force.x = -this.body.maxVel.x;
        this.body.force.y = this.body.maxVel.y;
        // change to jumping animation
        if (!this.renderable.isCurrentAnimation("jump")) {
          this.renderable.setCurrentAnimation("jump");
        }
      } else if (me.input.isKeyPressed('right') && me.input.isKeyPressed('jump')) {
        // update the default force
        this.body.force.x = this.body.maxVel.x;
        this.body.force.y = this.body.maxVel.y;
      } else {
        // TODO
      }

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // handle collisions against other shapes
        me.collision.check(this);

        // return true if we moved or if the renderable was updated
        return (this._super(me.Entity, 'update', [dt]) || this.body.vel.x !== 0 || this.body.vel.y !== 0);
    },

   /**
     * colision handler
     * (called when colliding with other objects)
     */
    onCollision : function (response, other) {
        // Make all other objects solid
        return true;
    }
});

