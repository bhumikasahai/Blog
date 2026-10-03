import React, { useState, useEffect } from "react";

import { supabase } from "./lib/supabase";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Journal from "./pages/Journal";
import UnsentLetter from "./pages/UnsentLetter";

function App() {

    const [currentPage, setCurrentPage] = useState("home");
    const [memories, setMemories] = useState([]);

    const [session, setSession] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleLogout = async () => {
        await supabase.auth.signOut();
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            setSession(data.session);
            setLoading(false);
        });

        const { data: authListener } = supabase.auth.onAuthStateChange(
            (_event, session) => {
                setSession(session);
            }
        );

        return () => {
            authListener.subscription.unsubscribe();
        };
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (!session) {
        return <Login />;
    }

    return (
        <div>

            {currentPage === "home" && <Home
                onNavigate={setCurrentPage}
                onLogout={handleLogout}
            />}

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