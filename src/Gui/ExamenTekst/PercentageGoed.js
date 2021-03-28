export default function PercentageGoed({ factor }) {
  const percentage = factor * 100;

  return (
    <View>
      <Text>{Math.round(percentage)}%</Text>
    </View>
  );
}
