import { MilestoneForm } from '@c4i-fe/milestones';
import { useCounter } from '@c4i-fe/feature-counter';
const Milestone = () => {
  const { value, increment, decrement } = useCounter();
  console.log(
    'Milestone rendered with counter value:',
    value,
    increment,
    decrement
  );
  return (
    <div>
      <MilestoneForm />
      <div className="p-6 text-center">
        <h1>Counter: {value ? value : 'no value'}</h1>
        <button
          onClick={() => {
            console.log('aa');
            increment();
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            console.log('bb');
            decrement();
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Milestone;
