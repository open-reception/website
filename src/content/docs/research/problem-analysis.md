---
title: Problem Analysis
description: The Results of Our Problem Analysis
---

In June and July 2025, we conducted qualitative interviews with medical practices. We interviewed doctors and their staff about _problems_ with online appointment booking. The results will be incorporated into the conception and design of OpenReception.

> Although we are developing an online appointment booking system using medical practices as an example, we aim to create a universally applicable tool.

## How Were the Interviews Conducted?

We conducted structured interviews with interested practices. In approximately 15-minute conversations, we inquired about:

- The workflows within their practice
- What software they currently use, if any
- What problems exist with their current solution

We first conducted these conversations with practice owners (doctors) and then with their staff. This allowed us to identify differences in satisfaction and problem assessment.

Additionally, we conducted many implicit (less structured) interviews with physicians.

## Identified Problems

In our conversations with our interview partners, we identified the following problems and requirements:

- Patients don't know which type of appointment they need. This often requires follow-up communication.
- Free choice of doctor must be possible.
- (Some) appointments require confirmation.
- (Some) appointments may only be offered under specific conditions (currently managed through code distribution).
- Patient-provided data is often incomplete (phone numbers, email addresses often missing).
- An individualized questionnaire is missing.
- With one provider, it's difficult to find calendar entries and associated patients and messages.
- With one provider, rescheduling appointments is relatively complicated.
- With one provider, it's difficult to identify the type of appointment when it's not yet booked.
- For offered appointments, it must be clear that the respective doctor is available.
- Calendar and practice systems don't communicate; when interfaces exist, they are very expensive.
- With one provider, users should be able to choose their own filters when analyzing patient data (controlling).

### Additional Findings

- The use of slots (time windows) is often preferred as they can be created based on practice workflows.
- Some appointments should only be bookable by staff.
- Some appointments should be bookable by external doctors (low usage).
- There must be a way to plan absences.
- Doctors alone cannot be the basis for available appointments. Rather, it must be a mix of doctors and equipment/rooms/examinations.

## Structural Decisions

Based on the identified problems, we made several structural decisions for OpenReception:

- We work with channels. These can be examinations, rooms, or equipment. Channels contain slots that are generated according to any pattern.
- We work with actors, which can be doctors, departments, or groups. Actors are not mandatory.
- Actors can be assigned to channels. Once done, this affects the actor's availability. This allows for workday planning.
- Channels without assigned actors run independently.
- Channels can be marked as non-public so only practice staff can book appointments.
- For each channel, it can be set whether appointment confirmation by the practice is required.
- Channels can be deactivated to prevent patients from booking new appointments.
- Email addresses and phone numbers of patients wanting to book appointments can be set as required fields at the tenant level.

## Identified User Stories

In our interviews, we identified the following user stories (user requirements):

### Technical Setup

- Setup by a system admin
- Adding a tenant by a system admin
- Tenant is invited and sets up their appointment portal
- Tenant creates channel

### Appointments

- A client books an appointment
- A practice schedules an appointment with a person on the phone
- A practice receives an appointment request (which must be confirmed)
- A client cancels an appointment
- The practice staff cancels an appointment
- A client attends an appointment
- The practice staff receives a client with an appointment at the reception
- The practice staff books an appointment for a client on the phone
- A practitioner is not available. The practice staff sets an absence

Beyond the requirements we identified through our problem interviews, there are additional requirements that we won't address here. These are mostly technical in nature and should ensure smooth operation and security of patient data.
