import '../pages/Home/HomePage.css'

const HomeHeader = ({title}) => {
    return (
        <>
        <div className='mainHeader' >
            <span className='title'>{title}</span>
        </div>
        </>
    )
}

export default HomeHeader;