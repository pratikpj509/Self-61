function Factorial({ number }) {
  const calculateFactorial = (n) => {
    if (n < 0) return 'Factorial not defined for negative numbers';
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  };

  return (
    <div>
      <h3>Factorial Component</h3>
      <p>Factorial of {number} is {calculateFactorial(number)}</p>
    </div>
  );
}
export default Factorial;