import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "../../../19.DUKUABI/src/components/TabButton";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(); //undifind (null x)

  function handleClick(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>탭을 선택해주세요.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code> {EXAMPLES[selectedTopic].code} </code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="예시들" id="examples">
      <Tabs
      buttonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => {
                handleClick("components");
              }}
            >
              컴포넌트
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => {
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => {
                handleClick("props");
              }}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => {
                handleClick("state");
              }}
            >
              State
            </TabButton>
          </>
        }
      >
        {" "}
        {tabContent}{" "}
      </Tabs>
    </Section>
  );
}
