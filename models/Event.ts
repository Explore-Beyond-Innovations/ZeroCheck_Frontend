import mongoose, { Schema, Document } from 'mongoose';

export interface Event {
  name: string;
  date: Date;
  location: string;
  category: string;
}

interface EventDocument extends Event, Document {}

const EventSchema = new Schema<EventDocument>({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  category: { type: String, required: true }
});

export default mongoose.models.Event ||
  mongoose.model<EventDocument>('Event', EventSchema);
