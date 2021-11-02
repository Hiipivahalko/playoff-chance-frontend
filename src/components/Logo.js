import React from 'react';

import montreal from '../images/montreal.png';
import carolina from '../images/carolina.png';


import Columbus_Blue_Jackets from  '../images/Columbus_Blue_Jackets.svg.png'
import New_Jersey_Devils from  '../images/New_Jersey_Devils.svg.png'
import New_York_Islanders from  '../images/New_York_Islanders.svg.png'
import New_York_Rangers from  '../images/New_York_Rangers.svg.png'
import Philadelphia_Flyers from  '../images/Philadelphia_Flyers_logo.svg'
import Pittsburgh_Penguins from  '../images/Pittsburgh_Penguins.svg.png'
import Washington_Capitals from  '../images/Washington_Capitals.svg'
import Boston_Bruins from  '../images/Boston_Bruins.svg.png'
import Buffalo_Sabres from  '../images/Buffalo_Sabres.svg.png'
import Detroit_Red_Wings from  '../images/Detroit_Red_Wings.svg'
import Florida_Panthers from  '../images/Florida_Panthers.svg.png'
//import Montreal_Canadiens from  'Montreal_Canadiens.svg.png'
import Ottawa_Senators from  '../images/Ottawa_Senators.svg'
import Tampa_Bay_Lightning from  '../images/Tampa_Bay_Lightning.svg'
import Toronto_Maple_Leafs from  '../images/Toronto_Maple_Leafs.svg'
import Arizona_Coyotes from  '../images/Arizona_Coyotes.svg.png'
import Chicago_Blackhawks from  '../images/Chicago_Blackhawksin.svg'
import Colorado_Avalanche from  '../images/Colorado_Avalanche.svg'
import Dallas_Stars from  '../images/Dallas_Stars.svg'
import Minnesota_Wild from  '../images/Minnesota_Wild.svg'
import Nashville_Predators from  '../images/Nashville_Predators.svg.png'
import St_Louis_Blues from  '../images/St_Louis_Blues.svg.png'
import Winnipeg_Jets from  '../images/Winnipeg_Jets.svg'
import Anaheim_Ducks from  '../images/Anaheim.svg'
import Calgary_Flames from  '../images/Calgary_Flames.svg.png'
import Edmonton_Oilers from  '../images/Edmonton_Oilers.svg'
import Los_Angeles_Kings from  '../images/LA_Kings.svg'
import San_Jose_Sharks from  '../images/San_Jose_Sharks.svg.png'
//import Seattle_Kraken from  ''
import Vancouver_Canucks from  '../images/Vancouver_Canucks.svg'
import Vegas_Golden_Knights from  '../images/Vegas_Golden_Knights.svg.png'




const Logo = ({team}) => {

    
    return (
        <div className='logo-box'>
           {team === 'Carolina Hurricanes' ? <img className='logo' alt={`${team} logo`} src={carolina}/>: null}
           {team === 'Columbus Blue Jackets' ? <img className='logo' alt={`${team} logo`} src={Columbus_Blue_Jackets}/>: null}
           {team === 'New Jersey Devils' ? <img className='logo' alt={`${team} logo`} src={New_Jersey_Devils}/>: null}
           {team === 'New York Islanders' ? <img className='logo' alt={`${team} logo`} src={New_York_Islanders}/>: null}
           {team === 'New York Rangers' ? <img className='logo' alt={`${team} logo`} src={New_York_Rangers}/>: null}
           {team === 'Philadelphia Flyers' ? <img className='logo' alt={`${team} logo`} src={Philadelphia_Flyers}/>: null}
           {team === 'Pittsburgh Penguins' ? <img className='logo' alt={`${team} logo`} src={Pittsburgh_Penguins}/>: null}
           {team === 'Washington Capitals' ? <img className='logo' alt={`${team} logo`} src={Washington_Capitals}/>: null}
           {team === 'Boston Bruins' ? <img className='logo' alt={`${team} logo`} src={Boston_Bruins}/>: null}
           {team === 'Buffalo Sabres' ? <img className='logo' alt={`${team} logo`} src={Buffalo_Sabres}/>: null}
           {team === 'Detroit Red Wings' ? <img className='logo' alt={`${team} logo`} src={Detroit_Red_Wings}/>: null}
           {team === 'Florida Panthers' ? <img className='logo' alt={`${team} logo`} src={Florida_Panthers}/>: null}
           {team === 'Montreal Canadiens' ? <img className='logo' alt={`${team} logo`} src={montreal}/>: null}
           {team === 'Ottawa Senators' ? <img className='logo' alt={`${team} logo`} src={Ottawa_Senators}/>: null}
           {team === 'Tampa Bay Lightning' ? <img className='logo' alt={`${team} logo`} src={Tampa_Bay_Lightning}/>: null}
           {team === 'Toronto Maple Leafs' ? <img className='logo' alt={`${team} logo`} src={Toronto_Maple_Leafs}/>: null}
           {team === 'Arizona Coyotes' ? <img className='logo' alt={`${team} logo`} src={Arizona_Coyotes}/>: null}
           {team === 'Chicago Blackhawks' ? <img className='logo' alt={`${team} logo`} src={Chicago_Blackhawks}/>: null}
           {team === 'Colorado Avalanche' ? <img className='logo' alt={`${team} logo`} src={Colorado_Avalanche}/>: null}
           {team === 'Dallas Stars' ? <img className='logo' alt={`${team} logo`} src={Dallas_Stars}/>: null}
           {team === 'Minnesota Wild' ? <img className='logo' alt={`${team} logo`} src={Minnesota_Wild}/>: null}
           {team === 'Nashville Predators' ? <img className='logo' alt={`${team} logo`} src={Nashville_Predators}/>: null}
           {team === 'St. Louis Blues' ? <img className='logo' alt={`${team} logo`} src={St_Louis_Blues}/>: null}
           {team === 'Winnipeg Jets' ? <img className='logo' alt={`${team} logo`} src={Winnipeg_Jets}/>: null}
           {team === 'Anaheim Ducks' ? <img className='logo' alt={`${team} logo`} src={Anaheim_Ducks}/>: null}
           {team === 'Calgary Flames' ? <img className='logo' alt={`${team} logo`} src={Calgary_Flames}/>: null}
           {team === 'Edmonton Oilers' ? <img className='logo' alt={`${team} logo`} src={Edmonton_Oilers}/>: null}
           {team === 'Los Angeles Kings' ? <img className='logo' alt={`${team} logo`} src={Los_Angeles_Kings}/>: null}
           {team === 'San Jose Sharks' ? <img className='logo' alt={`${team} logo`} src={San_Jose_Sharks}/>: null}
           {team === 'Vancouver Canucks' ? <img className='logo' alt={`${team} logo`} src={Vancouver_Canucks}/>: null}
           {team === 'Vegas Golden Knights' ? <img className='logo' alt={`${team} logo`} src={Vegas_Golden_Knights}/>: null}
           
        </div>
    )
}

export default Logo