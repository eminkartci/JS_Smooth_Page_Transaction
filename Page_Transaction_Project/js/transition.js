import Highway from '@dogstudio/highway';
import {TimelineLite} from 'gsap';

class Fade extends Highway.Transition { 

    // Responsible for loading
    in(fron,to,done) {

        // Time Line
        const tl = new TimelineLite();
        tl.duration(to,1,{
            left: '-100%',
            top: '50%',
        },{
            left: '0%',
        }).duration(to,1,{
            height: '2vh',
        },{
            height: '90vh',
            top: '10%',
            onComplete: function() {
                done();
            }
        })
    }

    // Responsible for exit process
    out({from,done}) {
        done();
    }

}

export default Fade
