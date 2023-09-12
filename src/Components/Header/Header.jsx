import Profile from '../../assets/images/profile.png'

const Header = () => {
    return (
      <>
      <div className='flex justify-between items-center w-11/12 mx-auto py-5 border-b'>
        <h1 className=' text-4xl font-bold text-center'> Knowledge Cafe </h1>
        <img src={Profile} alt="" ></img>
      </div>
      </>
    );
};

export default Header;