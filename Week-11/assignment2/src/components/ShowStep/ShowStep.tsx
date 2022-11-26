export default function ShowStep(props) {
  const { steps } = props;
  return (
    <div>
      <h2>You have walked {steps} steps today !</h2>
    </div>
  );
}
