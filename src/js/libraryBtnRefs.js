function chooseRefs() {
  const btnRefs = {
    watchedBtn: document.querySelector('[data-btn="watched"]'),
    queueBtn: document.querySelector('[data-btn="queue"]'),
  };
  return btnRefs;
}

export { chooseRefs };
