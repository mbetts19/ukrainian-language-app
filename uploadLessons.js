import { db } from "./firebase.js"; // Ensure this points to your Firebase config
import { collection, doc, setDoc } from "firebase/firestore";
import fs from "fs";

// Read JSON file
const lessons = JSON.parse(fs.readFileSync("lessons.json", "utf8"));

const uploadLessons = async () => {
  try {
    const lessonsRef = collection(db, "lessons");

    for (const lesson of lessons) {
      const docRef = doc(lessonsRef, lesson.id);
      await setDoc(docRef, {
        title: lesson.title,
        words: lesson.words
      });
      console.log(`Uploaded: ${lesson.title}`);
    }

    console.log("✅ All lessons uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading lessons:", error);
  }
};

uploadLessons();
