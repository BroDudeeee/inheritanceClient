import { useState } from "react";
import "./home.css";
import { calculate } from "@hu-bcs1/islamic-inheritance-calculator";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";

const Home = () => {
  const [wife, setWife] = useState(0);
  const [son, setSon] = useState(0);
  const [daughter, setDaughter] = useState(0);
  const [fullBrother, setFullBrother] = useState(0);
  const [fullSister, setFullSister] = useState(0);
  const [fullCousin, setFullCousin] = useState(0);
  const [maternalSibling, setMaternalSibling] = useState(0);
  const [paternalGrandSon, setPaternalGrandSon] = useState(0);
  const [paternalGrandDaughter, setPaternalGrandDaughter] = useState(0);
  const [fullPaternalUncle, setFullPaternalUncle] = useState(0);
  const [nephew, setNephew] = useState(0);
  const [husband, setHusband] = useState(false);
  const [father, setFather] = useState(false);
  const [mother, setMother] = useState(false);
  const [calcResult, setCalcResult] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasMarried, setHasMarried] = useState(false);
  const [hasSiblings, setHasSiblings] = useState(false);
  const [isParentsAlive, setIsParentsAlive] = useState(false);
  const [hasOtherRelatives, setHasOtherRelatives] = useState(false);
  const [mirath, setMirath] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCalculate = () => {
    const printResults = (results) => {
      const fractionToString = (r) => ({ ...r, share: r.share.toFraction() });
      console.log(results.map(fractionToString));
      setCalcResult(results.map(fractionToString));
    };

    const result = calculate({
      son,
      daughter,
      wife,
      husband,
      mother,
      father,
      full_brother: fullBrother,
      full_sister: fullSister,
      full_cousin: fullCousin,
      maternal_sibling: maternalSibling,
      paternal_grand_son: paternalGrandSon,
      paternal_grand_daughter: paternalGrandDaughter,
      full_paternal_uncle: fullPaternalUncle,
      full_nephew: nephew,
    });
    printResults(result);
  };

  return (
    <main>
      {isModalOpen && (
        <>
          <Modal
            results={calcResult}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            mirath={mirath}
          />
          <div className={`black ${isModalOpen && "open"}`}></div>
        </>
      )}

      <Header />
      {/* <form action="" className="mirathForm">
        <input
          type="number"
          min={0}
          id="Mirath"
          placeholder="Enter The Mirath"
          onChange={(e) => setMirath(e.target.value)}
        />
      </form> */}
      <section className={`inputs-card`}>
        <section className="allToggleMe">
          <section className="mainOption">
            <label htmlFor="">Has he/she been married before?: </label>
            <section className="radio-section">
              <label htmlFor="married">Yes</label>
              <input
                type="radio"
                className="radio-input"
                name="hasMarried"
                id="married"
                onChange={() => {
                  setHasMarried(true);
                }}
              />

              <label htmlFor="notMarried">No</label>
              <input
                type="radio"
                className="radio-input"
                name="hasMarried"
                id="notMarried"
                onChange={() => setHasMarried(false)}
              />
            </section>
          </section>

          {hasMarried && (
            <section className="toggleOptions">
              <section className="relative-input">
                <label htmlFor="son">Son: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setSon(e.target.value)}
                  id="son"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="daughter">Daughter: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setDaughter(e.target.value)}
                  id="daughter"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="paternalGrandSon">Paternal Grandson: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setPaternalGrandSon(e.target.value)}
                  id="paternalGrandSon"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="wife">Wife: </label>
                <input
                  type="number"
                  min={0}
                  max={4}
                  onChange={(e) => {
                    setWife(e.target.value);
                    setHusband(false);
                  }}
                  id="wife"
                  disabled={husband}
                />
              </section>

              <section className="relative-input-options">
                <label htmlFor="">Husband: </label>
                <section className="radio-section">
                  <label htmlFor="yesHusband">Yes</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="husband"
                    id="yesHusband"
                    onChange={() => {
                      setHusband(true);
                      setWife(0);
                    }}
                    disabled={wife > 0}
                  />

                  <label htmlFor="noHusband">No</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="husband"
                    id="noHusband"
                    onChange={() => setHusband(false)}
                  />
                </section>
              </section>

              <section className="relative-input">
                <label htmlFor="paternalGrandDaughter">
                  Paternal Grand Daughter:{" "}
                </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setPaternalGrandDaughter(e.target.value)}
                  id="paternalGrandDaughter"
                />
              </section>
            </section>
          )}
        </section>

        <section className="allToggleMe">
          <section className="mainOption">
            <label htmlFor="">Has Siblings?: </label>
            <section className="radio-section">
              <label htmlFor="hasSiblings">Yes</label>
              <input
                type="radio"
                className="radio-input"
                name="hasSiblings"
                id="hasSiblings"
                onChange={() => {
                  setHasSiblings(true);
                }}
              />

              <label htmlFor="noSiblings">No</label>
              <input
                type="radio"
                className="radio-input"
                name="hasSiblings"
                id="noSiblings"
                onChange={() => setHasSiblings(false)}
              />
            </section>
          </section>

          {hasSiblings && (
            <section className="toggleOptions">
              <section className="relative-input">
                <label htmlFor="fullBrother">Full Brother: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setFullBrother(e.target.value)}
                  id="fullBrother"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="fullSister">Full Sister: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setFullSister(e.target.value)}
                  id="fullSister"
                />
              </section>
              <section className="relative-input">
                <label htmlFor="maternalSibling">Maternal Sibling: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setMaternalSibling(e.target.value)}
                  id="maternalSibling"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="nephew">Nephew: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setNephew(e.target.value)}
                  id="nephew"
                />
              </section>
            </section>
          )}
        </section>

        <section className="allToggleMe">
          <section className="mainOption">
            <label htmlFor="">Is one or both parents alive?: </label>
            <section className="radio-section">
              <label htmlFor="parentsAlive">Yes</label>
              <input
                type="radio"
                className="radio-input"
                name="isParentsAlive"
                id="parentsAlive"
                onChange={() => {
                  setIsParentsAlive(true);
                }}
              />

              <label htmlFor="parentsNotAlive">No</label>
              <input
                type="radio"
                className="radio-input"
                name="isParentsAlive"
                id="parentsNotAlive"
                onChange={() => setIsParentsAlive(false)}
              />
            </section>
          </section>

          {isParentsAlive && (
            <section className="toggleOptions">
              <section className="relative-input-options">
                <label htmlFor="">Father: </label>
                <section className="radio-section">
                  <label htmlFor="yesFather">Yes</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="father"
                    id="yesFather"
                    onChange={() => setFather(true)}
                  />
                  <label htmlFor="noFather">No</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="father"
                    id="noFather"
                    onChange={() => setFather(false)}
                  />
                </section>
              </section>

              <section className="relative-input-options">
                <label htmlFor="">Mother: </label>
                <section className="radio-section">
                  <label htmlFor="yesMother">Yes</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="mother"
                    id="yesMother"
                    onChange={() => setMother(true)}
                  />
                  <label htmlFor="noFather">No</label>
                  <input
                    type="radio"
                    className="radio-input"
                    name="mother"
                    id="noMother"
                    onChange={() => setMother(false)}
                  />
                </section>
              </section>
            </section>
          )}
        </section>

        <section className="allToggleMe">
          <section className="mainOption">
            <label htmlFor="">Has other relatives ?: </label>
            <section className="radio-section">
              <label htmlFor="otherRelatives">Yes</label>
              <input
                type="radio"
                className="radio-input"
                name="hasOtherRelatives"
                id="otherRelatives"
                onChange={() => {
                  setHasOtherRelatives(true);
                }}
              />

              <label htmlFor="noOtherRelatives">No</label>
              <input
                type="radio"
                className="radio-input"
                name="hasOtherRelatives"
                id="noOtherRelatives"
                onChange={() => setHasOtherRelatives(false)}
              />
            </section>
          </section>

          {hasOtherRelatives && (
            <section className="toggleOptions">
              <section className="relative-input">
                <label htmlFor="fullCousin">Full Cousin: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setFullCousin(e.target.value)}
                  id="fullCousin"
                />
              </section>

              <section className="relative-input">
                <label htmlFor="fullPaternalUncle">Full Paternal Uncle: </label>
                <input
                  type="number"
                  min={0}
                  onChange={(e) => setFullPaternalUncle(e.target.value)}
                  id="fullPaternalUncle"
                />
              </section>
            </section>
          )}
        </section>
      </section>

      <button
        className="calculate-btn"
        onClick={() => {
          handleCalculate();
          openModal();
        }}
      >
        Calculate
      </button>
    </main>
  );
};

export default Home;
