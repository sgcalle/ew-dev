# -*- coding: utf-8 -*-

from odoo import models, fields, api, _


class AdmApplication(models.Model):
    _inherit = 'adm.application'
    # Añadido por Jesús
    finish_datetime = fields.Datetime(compute='_compute_finish_date', store=True)
    finish_timeline = fields.Float(compute='_compute_finish_date', store=True)
    # languages level
    first_language = fields.Many2one("adm.language", string="First Language")
    first_language_skill_write = fields.Boolean("First Language writing")
    first_language_skill_read = fields.Boolean("First Language reading")
    first_language_skill_speak = fields.Boolean("First Language speaking")
    first_language_skill_listen = fields.Boolean("First Language listening")
    # first_language_skill_write = fields.Many2many("adm.language.skill.type", string="First language skills")

    second_language = fields.Many2one("adm.language", string="Second Language")
    second_language_skill_write = fields.Boolean("Second Language writing")
    second_language_skill_read = fields.Boolean("Second Language reading")
    second_language_skill_speak = fields.Boolean("Second Language speaking")
    second_language_skill_listen = fields.Boolean("Second Language listening")
    # second_language_skills = fields.Many2many("adm.language.skill.type", string="Second language skills")

    third_language = fields.Many2one("adm.language", string="Third Language")
    third_language_skill_write = fields.Boolean("Third Language writing")
    third_language_skill_read = fields.Boolean("Third Language reading")
    third_language_skill_speak = fields.Boolean("Third Language speaking")
    third_language_skill_listen = fields.Boolean("Third Language listening")
    # third_language_skills = fields.Many2many("adm.language.skill.type", string="Third language skills")




class ApplicationSiblings(models.Model):
    _inherit = "adm.application.sibling"

    aisj_status = fields.Selection([('attending_to_aisj', 'Attending to AISJ'), ('applying', 'Applying to AISJ'), ('neither', 'Neither'), ], string='Status')
    c_aisj_relationship_to_application = fields.Char()
    c_years_attended = fields.Char()
