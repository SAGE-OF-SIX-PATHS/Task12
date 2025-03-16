import { Request, Response } from 'express';
import {
          getAllNotes,
          getNoteById,
          createNote,
          updateNote,
          deleteNote,
          getNotesByCategoryId,
} from '../services/noteServices';
import { successResponse, errorResponse } from '../utils/apiResponse';

export const listNotes = async (req: Request, res: Response) => {
          try {
                    const notes = await getAllNotes();
                    successResponse(res, notes, 'Notes fetched successfully');
          } catch (error) {
                    errorResponse(res, 'Error fetching notes');
          }
};
 
export const getNote = async (req: Request, res: Response) => {
          try {
                    const note = await getNoteById(req.params.id);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, note, 'Note fetched successfully');
          } catch (error) {
                    errorResponse(res, 'Error fetching note');
          }
};

export const addNote = async (req: Request, res: Response) => {
          try {
                    const note = await createNote(req.body);
                    successResponse(res, note, 'Note created successfully', 201);
          } catch (error) {
                    errorResponse(res, 'Error creating note');
          }
};

export const modifyNote = async (req: Request, res: Response) => {
          try {
                    const note = await updateNote(req.params.id, req.body);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, note, 'Note updated successfully');
          } catch (error) {
                    errorResponse(res, 'Error updating note');
          }
};

export const removeNote = async (req: Request, res: Response) => {
          try {
                    const note = await deleteNote(req.params.id);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, null, 'Note deleted successfully');
          } catch (error) {
                    errorResponse(res, 'Error deleting note');
          }
};

export const listNotesByCategory = async (req: Request, res: Response) => {
          try {
                    const notes = await getNotesByCategoryId(req.params.categoryId);
                    successResponse(res, notes, 'Notes fetched by category successfully');
          } catch (error) {
                    errorResponse(res, 'Error fetching notes by category');
          }
};