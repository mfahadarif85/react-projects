import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: "123",
      label: "Can I use React on a a project",
      content: "YES, You can use React on any project you want.",
    },
    {
      id: "1234",
      label: "Can I use javascript on a a project?",
      content: "YES, You can use javascript on any project you want.",
    },
    {
      id: "12345",
      label: "Can I use rust on a a project",
      content: "YES, You can use rust on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default AccordionPage;
