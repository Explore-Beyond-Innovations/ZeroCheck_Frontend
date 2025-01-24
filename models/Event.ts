import mongoose, { Schema, Document } from 'mongoose';

export interface Event {
  name: string;
  startDate: number; // in timestamp
  endDate: number;
  location: string;
  description: string;
  cost: number;
  capacity: number;
  tags: string[];
}

interface EventDocument extends Event, Document {}

const EventSchema = new Schema<EventDocument>({
  name: { type: String, required: true },
  startDate: { type: Number, required: true },
  endDate: { type: Number, required: true },
  location: { type: String, required: true },
  description: { type: String, required: true },
  cost: { type: Number },
  capacity: { type: Number },
  tags: { type: [String] }
});

export default mongoose.models.Event ||
  mongoose.model<EventDocument>('Event', EventSchema);
