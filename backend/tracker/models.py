from django.db import models

class PostpartumData(models.Model):
    date = models.DateField(auto_now_add=True)
    weight = models.FloatField()
    blood_pressure = models.CharField(max_length=15)
    heart_rate = models.IntegerField()
    body_temp = models.FloatField()
    vaginal_bleeding = models.CharField(max_length=20, choices=[('Light', 'Light'), ('Moderate', 'Moderate'), ('Heavy', 'Heavy')])
    pain_level = models.IntegerField()
    breastfeeding_status = models.BooleanField()
    sleep_hours = models.FloatField()
    day_naps = models.FloatField()
    mood = models.CharField(max_length=20, choices=[('Happy', 'Happy'), ('Anxious', 'Anxious'), ('Sad', 'Sad')])
    energy_level = models.IntegerField()
    appetite = models.CharField(max_length=20, choices=[('Good', 'Good'), ('Average', 'Average'), ('Poor', 'Poor')])
    hydration = models.IntegerField()
    bowel_movements = models.BooleanField()
    urination_issues = models.BooleanField()
    perineal_healing_notes = models.TextField(blank=True)
    c_section_healing_notes = models.TextField(blank=True)
    emotional_notes_or_stressors = models.TextField(blank=True)

    def __str__(self):
        return f"Postpartum Data on {self.date}"
