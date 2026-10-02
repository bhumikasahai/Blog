import React, { useState } from "react";

import Home from "./pages/Home";
import Journal from "./pages/Journal";
import UnsentLetter from "./pages/UnsentLetter";

function App() {

    const [currentPage, setCurrentPage] = useState("home");
    const [memories, setMemories] = useState([]);

    return (
        <div>

            {currentPage === "home" && <Home onNavigate={setCurrentPage} />}

            {currentPage === "journal" && (
                <Journal
                    onNavigate={setCurrentPage}
                    memories={memories}
                />
            )}

            {currentPage === "unsent-letter" && (
                <UnsentLetter
                    onNavigate={setCurrentPage}
                    onSaveMemory={(newMemory) =>
                        setMemories((prevMemories) => [
                            ...prevMemories,
                            newMemory
                        ])
                    }
                />
            )}


        </div>
    );
}

export default App;