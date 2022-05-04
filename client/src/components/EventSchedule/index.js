import React, {useState, useContext} from 'react';
<<<<<<< Updated upstream
import '../../App.css';

const EventSchedule = () => {
    // hooks
<Datepicker
    responsive={{
        xsmall: {
            controls:['date', 'time'],
            dateFormat:"DDD D MMM, YYYY",
            timeFormat:"H:mm",
            dateWheels:"|DDD D MMM, YYYY|",
            display: 'bottom',
            touchUi: true
        },
        small: {
            controls: ['date', 'time'],
            dateFormat: "DDD D MMM, YYYY",
            timeFormat: "H:mm",
            dateWheels: "|DDD D MMM, YYYY|",
            display: 'center',
            touchUi: true
        },
        custom: { // Custom breakpoint
            breakpoint: 800,
            controls: ['calendar'],
            display: 'center',
            touchUi: false
        },
    


    const: [event, setEvent] = useState(''),
    const: [time, setTime] = useState(''),

    const: { addEvent } = useContext(GlobalContext),
    const: { events } = useContext(GlobalContext),

    const: onSubmit = e => {
        e.preventDefault();

=======
import '/client/src/App.css'
import Event from '../Events/index';
import { GlobalContext } from '../context/GlobalState';

const Main = () => {
    // hooks
    const [event, setEvent] = useState('');
    const [time, setTime] = useState('');

    const { addEvent } = useContext(GlobalContext);
    const { events } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();
        
>>>>>>> Stashed changes
        const newEvent = {
            id: Math.floor(Math.random() * 100000000),
            event,
            time
        }

        addEvent(newEvent);

<<<<<<< Updated upstream
        // reset the form
        setEvent('');
        setTime('');
      }
    }}
/>
=======
        // restet the form
        setEvent('');
        setTime('');
      }

>>>>>>> Stashed changes
    return (
        <div className="Content">
            <div className="Header">
                <div className="Layer">
                    Events
                </div>
            </div>
            <div className="Body">
                <ul className="Events">
                    {events.map(item => (<Event key={item.id} item={item} />))}
                </ul>
                <div className="AddEvent">
                    <form onSubmit={onSubmit}>
                        <input className="eventFiled" value={event} type="text" onChange={(e) => setEvent(e.target.value)} placeholder="New Event" />
                        <input className="eventTime" value={time} type="text" onChange={(e) => setTime(e.target.value)} placeholder="Time" />
                        <button className="submitBtn">Add Event</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

<<<<<<< Updated upstream
export default EventSchedule;
=======
export default Main;
>>>>>>> Stashed changes
