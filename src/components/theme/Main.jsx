import Card from "../Card";
export default function Main({ darkMode }) {
  // Main.jsx에서 사용하지 않지만 자식에게 내려주기 위해 받음
  return (
    <main>
      <Card title="제목" darkMode={darkMode}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus
        iste laborum iusto ipsa cum est dolorum pariatur eaque ipsam at, sunt
        exercitationem dolor magnam, et esse. Porro laborum eligendi nemo.
      </Card>
    </main>
  );
}
