export default function CvPreview({ cvData }) {
  console.table(cvData);
  console.table(cvData.personal);
  return (
    <>
      <h1>{cvData.personal.name}</h1>
    </>
  );
}
