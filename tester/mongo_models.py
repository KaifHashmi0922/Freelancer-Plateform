from mongoengine import Document, StringField, IntField, DateTimeField
import datetime

class Message(Document):
    sender_id = IntField(required=True)     # MySQL user ID
    receiver_id = IntField(required=True)   # MySQL user ID
    text = StringField()
    created_at = DateTimeField(default=datetime.datetime.utcnow)
