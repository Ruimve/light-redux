import { changePerson } from '../Redux/redux';
import { useAppSelector, useAppDispatch } from '../Redux/hook';

interface Props {
  name: string;
}

function Demo(props: Props) {
  const { name } = props;
  const person = useAppSelector(state => state.demoReducer.person);

  const dispatch = useAppDispatch();

  const handleChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changePerson(e.target.value));
  }

  return <div>
    <div>
      {name}
    </div>
    <div>
      姓名: {person}
      <input type="text" onChange={handleChangeName} />
    </div>
  </div>
}

export { Demo }