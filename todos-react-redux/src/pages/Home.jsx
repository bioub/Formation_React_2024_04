// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from '../Select';
import { likesSelector, nameSelector } from '../store/selectors';
import { incrementLikes, updateName } from '../store/actions';

function Home() {
  // const [likes, setLikes] = useState(0);
  // const [name, setName] = useState('Titi');
  const likes = useSelector(likesSelector);
  const name = useSelector(nameSelector);
  const dispatch = useDispatch();

  return (
    <div className="Home">
      <button onClick={() => dispatch(incrementLikes())}>
        likes is {likes}
      </button>
      <Select
        items={['Romain', 'Titi', 'Tata']}
        value={name}
        onValueChange={(v) => dispatch(updateName(v))}
      />
      <p>
        Prénom sélectionné : <span className="selected">{name}</span>
      </p>
    </div>
  );
}

export default Home;
