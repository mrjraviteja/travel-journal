import Earth from '../assets/earth.png'

function Navbar(){
    return(
        <div className="nav">
            <div className='nav-title'>
                <img src={Earth}/>
                <h1>My Travel Journal</h1>
            </div>
            <h1>React Course - Project 2</h1>
        </div>
    )
}

export default Navbar