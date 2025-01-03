# Generated by Django 4.2.17 on 2024-12-28 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='PostpartumData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField(auto_now_add=True)),
                ('weight', models.FloatField()),
                ('blood_pressure', models.CharField(max_length=15)),
                ('heart_rate', models.IntegerField()),
                ('body_temp', models.FloatField()),
                ('vaginal_bleeding', models.CharField(choices=[('Light', 'Light'), ('Moderate', 'Moderate'), ('Heavy', 'Heavy')], max_length=20)),
                ('pain_level', models.IntegerField()),
                ('breastfeeding_status', models.BooleanField()),
                ('sleep_hours', models.FloatField()),
                ('day_naps', models.FloatField()),
                ('mood', models.CharField(choices=[('Happy', 'Happy'), ('Anxious', 'Anxious'), ('Sad', 'Sad')], max_length=20)),
                ('energy_level', models.IntegerField()),
                ('appetite', models.CharField(choices=[('Good', 'Good'), ('Average', 'Average'), ('Poor', 'Poor')], max_length=20)),
                ('hydration', models.IntegerField()),
                ('bowel_movements', models.BooleanField()),
                ('urination_issues', models.BooleanField()),
                ('perineal_healing_notes', models.TextField(blank=True)),
                ('c_section_healing_notes', models.TextField(blank=True)),
                ('emotional_notes_or_stressors', models.TextField(blank=True)),
            ],
        ),
    ]
