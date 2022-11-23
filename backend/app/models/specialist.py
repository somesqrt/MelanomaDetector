from app.extensions import db
from slugify import slugify


class SpecialistModel(db.Model):
    __tablename__ = 'specialist'

    id = db.Column(db.Integer, primary_key=True)
    clinics = db.Column(db.String())
    doctor = db.Column(db.String())
    web = db.Column(db.String())
    mail = db.Column(db.String())
    phone = db.Column(db.String())
    city = db.Column(db.String())
    street = db.Column(db.String())
    floor = db.Column(db.Integer())
    postal_code = db.Column(db.String())
    longitude = db.Column(db.Float())
    latitude = db.Column(db.Float())
    private = db.Column(db.Boolean())
    working_hours = db.Column(db.String())
    online_reservation = db.Column(db.String())
    health_insurance = db.Column(db.String())

    def serialize_all(self):
        return {
            "id": self.id,
            "clinics": self.clinics,
            "doctor": self.doctor,
            "web": self.web,
            "mail": self.mail,
            "phone": self.phone,
            "city": self.city,
            "street": self.street,
            "floor": self.floor,
            "postal_code": self.postal_code,
            "longitude": self.longitude,
            "latitude": self.latitude,
            "private": self.private,
            "working_hours": self.working_hours,
            "online_reservation": self.online_reservation,
            "health_insurance": self.health_insurance,
        }
    
    def __getitem__(self, key):
        return getattr(self, key)

    def __setitem__(self, key, value):
        setattr(self, key, value)