(() => {
  const ALL_MOOD_ID = "all";

  if (!moods.some((mood) => mood.id === ALL_MOOD_ID)) {
    moods.unshift({ id: ALL_MOOD_ID, label: "全部", color: "#4c7c73" });
  }

  const originalPickStore = pickStore;

  pickStore = function pickStoreWithAllMode(seedByDate = false, extraRandom = false) {
    if (state.mood !== ALL_MOOD_ID) {
      return originalPickStore(seedByDate, extraRandom);
    }

    const candidates = getFilteredStores(true);
    if (!candidates.length) {
      return null;
    }

    if (seedByDate) {
      const index = Math.floor(seededRandom(`all-stores-${dateKey()}`) * candidates.length);
      return candidates[Math.min(index, candidates.length - 1)];
    }

    return candidates[Math.floor(Math.random() * candidates.length)];
  };

  function activateAllStoresMode(seedByDate = true) {
    state.mood = ALL_MOOD_ID;
    renderMoodChips();
    state.current = pickStore(seedByDate);
    renderAll();
  }

  activateAllStoresMode(true);

  els.resetFiltersButton.addEventListener("click", () => {
    state.mood = ALL_MOOD_ID;
    renderMoodChips();
    state.current = pickStore(false);
    renderAll();
  });

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch((error) => {
        console.warn("PWA service worker registration failed:", error);
      });
    });
  }
})();
