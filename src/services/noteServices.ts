import Note, { INote } from '../models/Note';
import Category from '../models/Category';
import { errorResponse } from '../utils/apiResponse';

export const getAllNotes = async () => {
          return await Note.find().populate('category');
};

export const getNoteById = async (id: string) => {
          return await Note.findById(id).populate('category');
};

export const createNote = async (noteData: Partial<INote>) => {
          const note = new Note(noteData);
          return await note.save();
};

export const updateNote = async (id: string, noteData: Partial<INote>) => {
          return await Note.findByIdAndUpdate(id, noteData, { new: true }).populate('category');
};

export const deleteNote = async (id: string) => {
          return await Note.findByIdAndDelete(id);
};

export const getNotesByCategoryId = async (categoryId: string) => {
          return await Note.find({ category: categoryId }).populate('category');
};