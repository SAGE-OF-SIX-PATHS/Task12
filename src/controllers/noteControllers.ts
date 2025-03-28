import { Request, Response, NextFunction } from 'express';
import {
          getAllNotes,
          getNoteById,
          createNote,
          updateNote,
          deleteNote,
          getNotesByCategoryId,
} from '../services/noteServices';
import { successResponse, errorResponse } from '../utils/apiResponse';
import { INote } from '../models/Note';

export const listNotes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const notes: INote[] = await getAllNotes();
                    successResponse(res, notes, 'Notes fetched successfully');
          } catch (error) {
                    next(error); // Pass errors to Express error handler
          }
};

export const getNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const note: INote | null = await getNoteById(req.params.id);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, note, 'Note fetched successfully');
          } catch (error) {
                    next(error);
          }
};

export const addNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const note: INote = await createNote(req.body);
                    successResponse(res, note, 'Note created successfully', 201);
          } catch (error) {
                    next(error);
          }
};

export const modifyNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const note: INote | null = await updateNote(req.params.id, req.body);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, note, 'Note updated successfully');
          } catch (error) {
                    next(error);
          }
};

export const removeNote = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const note: INote | null = await deleteNote(req.params.id);
                    if (!note) {
                              return errorResponse(res, 'Note not found', 404);
                    }
                    successResponse(res, null, 'Note deleted successfully');
          } catch (error) {
                    next(error);
          }
};

export const listNotesByCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
          try {
                    const notes: INote[] = await getNotesByCategoryId(req.params.categoryId);
                    successResponse(res, notes, 'Notes fetched by category successfully');
          } catch (error) {
                    next(error);
          }
};