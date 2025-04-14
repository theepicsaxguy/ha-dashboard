// this is an auto generated file, do not change this manually

import { ServiceFunction, ServiceFunctionTypes } from "@hakit/core";
declare module "@hakit/core" {
  export interface CustomSupportedServices<
    T extends ServiceFunctionTypes = "target",
  > {
    persistentNotification: {
      // Shows a notification on the notifications panel.
      create: ServiceFunction<
        object,
        T,
        {
          // Message body of the notification. @example Please check your configuration.yaml.
          message: string;
          // Optional title of the notification. @example Test notification
          title?: string;
          // ID of the notification. This new notification will overwrite an existing notification with the same ID. @example 1234
          notification_id?: string;
        }
      >;
      // Deletes a notification from the notifications panel.
      dismiss: ServiceFunction<
        object,
        T,
        {
          // ID of the notification to be deleted. @example 1234
          notification_id: string;
        }
      >;
      // Deletes all notifications from the notifications panel.
      dismissAll: ServiceFunction<object, T, object>;
    };
    homeassistant: {
      // Saves the persistent states immediately. Maintains the normal periodic saving interval.
      savePersistentStates: ServiceFunction<object, T, object>;
      // Generic action to turn devices off under any domain.
      turnOff: ServiceFunction<object, T, object>;
      // Generic action to turn devices on under any domain.
      turnOn: ServiceFunction<object, T, object>;
      // Generic action to toggle devices on/off under any domain.
      toggle: ServiceFunction<object, T, object>;
      // Stops Home Assistant.
      stop: ServiceFunction<object, T, object>;
      // Checks the Home Assistant YAML-configuration files for errors. Errors will be shown in the Home Assistant logs.
      checkConfig: ServiceFunction<object, T, object>;
      // Forces one or more entities to update their data.
      updateEntity: ServiceFunction<
        object,
        T,
        {
          // List of entities to force update.
          entity_id: string;
        }
      >;
      // Reloads the Core configuration from the YAML-configuration.
      reloadCoreConfig: ServiceFunction<object, T, object>;
      // Updates the Home Assistant location.
      setLocation: ServiceFunction<
        object,
        T,
        {
          // Latitude of your location. @example 32.87336 @constraints  number: mode: box, min: -90, max: 90, step: any
          latitude: number;
          // Longitude of your location. @example 117.22743 @constraints  number: mode: box, min: -180, max: 180, step: any
          longitude: number;
          // Elevation of your location above sea level. @example 120 @constraints  number: mode: box, step: any
          elevation?: number;
        }
      >;
      // Reloads Jinja2 templates found in the `custom_templates` folder in your config. New values will be applied on the next render of the template.
      reloadCustomTemplates: ServiceFunction<object, T, object>;
      // Reloads the specified config entry.
      reloadConfigEntry: ServiceFunction<
        object,
        T,
        {
          // The configuration entry ID of the entry to be reloaded. @example 8955375327824e14ba89e4b29cc3ec9a
          entry_id?: string;
        }
      >;
      // Reloads all YAML configuration that can be reloaded without restarting Home Assistant.
      reloadAll: ServiceFunction<object, T, object>;
      // Adds an alias to an area.
      addAliasToArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to add the alias to.
          area_id: any;
          // The alias (or list of aliasses) to add to the area.
          alias: object;
        }
      >;
      // Deletes a label on the fly.
      deleteLabel: ServiceFunction<
        object,
        T,
        {
          // The ID of the label to delete.
          label_id: any;
        }
      >;
      // Updates an entity's ID on the fly.
      updateEntityId: ServiceFunction<
        object,
        T,
        {
          // The entity/entities to update.
          entity_id: string;
          // The new ID for the entity
          new_entity_id: string;
        }
      >;
      // Adds a label to an entity. If multiple labels or multiple entities are provided, all combinations will be added.
      addLabelToEntity: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to add the entity/entities. @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the entity/entities to add the label(s) to.
          entity_id: string;
        }
      >;
      // Disables an entity (or entities) on the fly.
      disableEntity: ServiceFunction<
        object,
        T,
        {
          // The entity/entities to disable.
          entity_id: string;
        }
      >;
      // Adds an device to an area. Please note, if the device is already in an area, it will be removed from the previous area.
      addDeviceToArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to add the device to.
          area_id: any;
          // The ID of the device(s) to add to the area.
          device_id: string;
        }
      >;
      // Disables polling for updates for an integration configuration entry.
      disablePolling: ServiceFunction<
        object,
        T,
        {
          // The integration configuration entry to disable polling for.
          config_entry_id: any;
        }
      >;
      // Creates a new label on the fly.
      createLabel: ServiceFunction<
        object,
        T,
        {
          // The name of the label to create.
          name: string;
          // Description for the label.
          description: string;
          // Icon to use for the label. @constraints  icon: placeholder: mdi:tag
          icon?: string;
          // Color to use for the label. Can be a color name from the list, or a hex color code (like #FF0000).
          color?:
            | "primary"
            | "accent"
            | "disabled"
            | "red"
            | "pink"
            | "purple"
            | "deep_purple"
            | "indigo"
            | "blue"
            | "light_blue"
            | "cyan"
            | "teal"
            | "green"
            | "light_green"
            | "lime"
            | "yellow"
            | "orange"
            | "deep_orange"
            | "brown"
            | "grey"
            | "blue_grey"
            | "black"
            | "white";
        }
      >;
      // Adds a label to a device. If multiple labels or multiple devices are provided, all combinations will be added.
      addLabelToDevice: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to add the device(s). @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the device(s) to add the label(s) to.
          device_id: string;
        }
      >;
      // Disables a device on the fly.
      disableDevice: ServiceFunction<
        object,
        T,
        {
          // The device to disable.
          device_id: string;
        }
      >;
      // Creates a new floor on the fly.
      createFloor: ServiceFunction<
        object,
        T,
        {
          // The name of the floor to create.
          name: string;
          // Icon to use for the floor. @constraints  icon: placeholder: mdi:texture-box
          icon?: string;
          // The level the floor is on in your home.
          level?: number;
          // A list of aliases for the floor. This is useful if you want to use the floor in a different language or different nickname.
          aliases?: object;
        }
      >;
      // Hides an entity (or entities) on the fly.
      hideEntity: ServiceFunction<
        object,
        T,
        {
          // The entity/entities to hide.
          entity_id: string;
        }
      >;
      // Sets aliases for a floor. Overwrite and removed any existing aliases, fully replacing them with the new ones.
      setFloorAliases: ServiceFunction<
        object,
        T,
        {
          // The ID of the floor to set the aliases for.
          floor_id: any;
          // The aliases to set for the floor.
          aliases: object;
        }
      >;
      // Adds an alias to a floor.
      addAliasToFloor: ServiceFunction<
        object,
        T,
        {
          // The ID of the floor to add the alias to.
          floor_id: any;
          // The alias (or list of aliasses) to add to the floor.
          alias: object;
        }
      >;
      // Enables an entity (or entities) on the fly.
      enableEntity: ServiceFunction<
        object,
        T,
        {
          // The entity/entities to enable.
          entity_id: string;
        }
      >;
      // Removes an area from a floor. As an area can only be on one floor, this call doesn't need to specify the floor.
      removeAreaFromFloor: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to remove the floor from. @constraints  area: multiple: true
          area_id: any;
        }
      >;
      // Enables an integration configuration entry.
      enableConfigEntry: ServiceFunction<
        object,
        T,
        {
          // The integration configuration entry to enable.
          config_entry_id: any;
        }
      >;
      // Ignore all currently discovered devices that are shown on the integrations dashboard. This will not ignore devices that are discovered after this.
      ignoreAllDiscovered: ServiceFunction<
        object,
        T,
        {
          // The integration domain to ignore all discovered devices for. If not provided, all domains will be considered to be ignored.
          domain?: string;
        }
      >;
      // Lists all orphaned database entities unclaimed by any integration.
      listOrphanedDatabaseEntities: ServiceFunction<object, T, object>;
      // Removes a label to an area. If multiple labels or multiple areas are provided, all combinations will be removed.
      removeLabelFromArea: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to remove from the area(s). @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the area(s) to remove the label(s) from. @constraints  area: multiple: true
          area_id: any;
        }
      >;
      // Removes an entity from an area. As an entity can only be in one area, this call doesn't need to specify the area. Please note, the entity will still be in the area of the device that provides it after this call.
      removeEntityFromArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the entity (or entities) to remove the area from.
          entity_id: string;
        }
      >;
      // Deletes a new area on the fly.
      deleteArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to delete.
          area_id: any;
        }
      >;
      // Removes a label from an entity. If multiple labels or multiple entities are provided, all combinations will be removed.
      removeLabelFromEntity: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to remove from the entity/entities. @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the entity/entities to remove the label(s) from.
          entity_id: string;
        }
      >;
      // Deletes all orphaned entities that no longer have an integration that claim/provide them. Please note, if the integration was just removed, it might need a restart for Home Assistant to realize they are orphaned. **WARNING** Entities might have been marked orphaned because an integration is offline or not working since Home Assistant started. Calling this action will delete those entities as well.
      deleteAllOrphanedEntities: ServiceFunction<object, T, object>;
      // Enables a device on the fly.
      enableDevice: ServiceFunction<
        object,
        T,
        {
          // The device to disable.
          device_id: string;
        }
      >;
      // Adds an entity to an area. Please note, if the enity is already in an area, it will be removed from the previous area. This will override the area the device, that provides this entity, is in.
      addEntityToArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to add the entity to.
          area_id: any;
          // The ID of the entity (or entities) to add to the area.
          entity_id: string;
        }
      >;
      // Deletes a floor on the fly.
      deleteFloor: ServiceFunction<
        object,
        T,
        {
          // The ID of the floor to delete.
          floor_id: any;
        }
      >;
      // Restart the Home Assistant action.
      restart: ServiceFunction<
        object,
        T,
        {
          // If the restart should be done in safe mode. This will disable all custom integrations and frontend modules.
          safe_mode?: boolean;
          // Force the restart. WARNING! This will not gracefully shutdown Home Assistant, it will skip configuration checks and ignore running database migrations. Only use this if you know what you are doing.
          force?: boolean;
        }
      >;
      // Enables polling for updates for an integration configuration entry.
      enablePolling: ServiceFunction<
        object,
        T,
        {
          // The integration configuration entry to enable polling for.
          config_entry_id: any;
        }
      >;
      // Removes a label from a device. If multiple labels or multiple devices are provided, all combinations will be removed.
      removeLabelFromDevice: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to remove from the device(s). @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the device(s) to remove the label(s) from.
          device_id: string;
        }
      >;
      // Removes an alias from a floor.
      removeAliasFromFloor: ServiceFunction<
        object,
        T,
        {
          // The ID of the floor to remove the alias from.
          floor_id: any;
          // The alias (or list of aliasses) to remove from the floor.
          alias: object;
        }
      >;
      // Adds a label to an area. If multiple labels or multiple areas are provided, all combinations will be added.
      addLabelToArea: ServiceFunction<
        object,
        T,
        {
          // The ID(s) of the label(s) to add the area(s). @constraints  label: multiple: true
          label_id: any;
          // The ID(s) of the area(s) to add the label(s) to. @constraints  area: multiple: true
          area_id: any;
        }
      >;
      // Removes a device from an area. As a device can only be in one area, this call doesn't need to specify the area.
      removeDeviceFromArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the device to remove the area from.
          device_id: string;
        }
      >;
      // Sets aliases for an area. Overwrite and removed any existing aliases, fully replacing them with the new ones.
      setAreaAliases: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to set the aliases for.
          area_id: any;
          // The aliases to set for the area.
          aliases: object;
        }
      >;
      // Unhides an entity (or entities) on the fly.
      unhideEntity: ServiceFunction<
        object,
        T,
        {
          // The entity/entities to unhide.
          entity_id: string;
        }
      >;
      // Removes an alias from an area.
      removeAliasFromArea: ServiceFunction<
        object,
        T,
        {
          // The ID of the area to remove the alias from.
          area_id: any;
          // The alias (or list of aliasses) to remove from the area.
          alias: object;
        }
      >;
      // Adds an area to a floor. Please note, if the area is already on a floor, it will be removed from the previous floor.
      addAreaToFloor: ServiceFunction<
        object,
        T,
        {
          // The ID of the floor to add the area on.
          floor_id: any;
          // The ID of the area(s) to add to the floor. @constraints  area: multiple: true
          area_id: any;
        }
      >;
      // Disables an integration configuration entry.
      disableConfigEntry: ServiceFunction<
        object,
        T,
        {
          // The integration configuration entry to disable.
          config_entry_id: any;
        }
      >;
      // Creates a new area on the fly.
      createArea: ServiceFunction<
        object,
        T,
        {
          // The name of the area to create.
          name: string;
          // Icon to use for the area. @constraints  icon: placeholder: mdi:texture-box
          icon?: string;
          // A list of aliases for the area. This is useful if you want to use the area in a different language or different nickname.
          aliases?: object;
        }
      >;
    };
    systemLog: {
      // Deletes all log entries.
      clear: ServiceFunction<object, T, object>;
      // Write log entry.
      write: ServiceFunction<
        object,
        T,
        {
          // Message to log. @example Something went wrong
          message: string;
          // Log level.
          level?: "debug" | "info" | "warning" | "error" | "critical";
          // Logger name under which to log the message. Defaults to `system_log.external`. @example mycomponent.myplatform
          logger?: string;
        }
      >;
    };
    logger: {
      // Sets the default log level for integrations.
      setDefaultLevel: ServiceFunction<
        object,
        T,
        {
          // Default severity level for all integrations.
          level?: "debug" | "info" | "warning" | "error" | "fatal" | "critical";
        }
      >;
      // Sets the log level for one or more integrations.
      setLevel: ServiceFunction<object, T, object>;
    };
    person: {
      // Reloads persons from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Remove a device tracker from a person.
      removeDeviceTracker: ServiceFunction<
        object,
        T,
        {
          // The person entity ID to remove the device tracker from.
          entity_id: string;
          // The device tracker entity ID to remove from the person.
          device_tracker: string;
        }
      >;
      // Add a device tracker to a person.
      addDeviceTracker: ServiceFunction<
        object,
        T,
        {
          // The person entity ID to add the device tracker to.
          entity_id: string;
          // The device tracker entity ID to add to the person.
          device_tracker: string;
        }
      >;
    };
    frontend: {
      // Sets the default theme Home Assistant uses. Can be overridden by a user.
      setTheme: ServiceFunction<
        object,
        T,
        {
          // Name of a theme. @example default
          name: string;
          // Theme mode.
          mode?: "dark" | "light";
        }
      >;
      // Reloads themes from the YAML-configuration.
      reloadThemes: ServiceFunction<object, T, object>;
    };
    recorder: {
      // Starts purge task - to clean up old data from your database.
      purge: ServiceFunction<
        object,
        T,
        {
          // Number of days to keep the data in the database. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. @constraints  number: min: 0, max: 365, unit_of_measurement: days
          keep_days?: number;
          // Attempt to save disk space by rewriting the entire database file.
          repack?: boolean;
          // Apply `entity_id` and `event_type` filters in addition to time-based purge.
          apply_filter?: boolean;
        }
      >;
      // Starts a purge task to remove the data related to specific entities from your database.
      purgeEntities: ServiceFunction<
        object,
        T,
        {
          // List of entities for which the data is to be removed from the Recorder database.
          entity_id?: string;
          // List of domains for which the data needs to be removed from the Recorder database. @example sun
          domains?: object;
          // List of glob patterns used to select the entities for which the data is to be removed from the Recorder database. @example domain*.object_id*
          entity_globs?: object;
          // Number of days to keep the data for rows matching the filter. Starting today, counting backward. A value of `7` means that everything older than a week will be purged. The default of 0 days will remove all matching rows immediately. @constraints  number: min: 0, max: 365, unit_of_measurement: days
          keep_days?: number;
        }
      >;
      // Starts the recording of events and state changes.
      enable: ServiceFunction<object, T, object>;
      // Stops the recording of events and state changes.
      disable: ServiceFunction<object, T, object>;
      // Import long-term statistics.
      importStatistics: ServiceFunction<
        object,
        T,
        {
          // The statistics ID (entity ID) to import for.
          statistic_id: string;
          // The name of the statistics.
          name?: string;
          // The source of the statistics data.
          source: string;
          // The unit of measurement of the statistics.
          unit_of_measurement?: string;
          // If the statistics has a mean value.
          has_mean: boolean;
          // If the statistics has a sum value.
          has_sum: boolean;
          // A list of mappings/dictionaries with statistics to import. The dictionaries must contain a 'start' key with a datetime string other valid options are 'mean', 'sum', 'min', 'max', 'last_reset', and 'state'. All of those are optional and either an integer or a float, except for 'last_reset' which is a datetime string.
          stats: object;
        }
      >;
    };
    hassio: {
      // Starts an add-on.
      addonStart: ServiceFunction<
        object,
        T,
        {
          // The add-on to start. @example core_ssh
          addon: string;
        }
      >;
      // Stops an add-on.
      addonStop: ServiceFunction<
        object,
        T,
        {
          // The add-on to stop. @example core_ssh
          addon: string;
        }
      >;
      // Restarts an add-on.
      addonRestart: ServiceFunction<
        object,
        T,
        {
          // The add-on to restart. @example core_ssh
          addon: string;
        }
      >;
      // Updates an add-on. This action should be used with caution since add-on updates can contain breaking changes. It is highly recommended that you review release notes/change logs before updating an add-on.
      addonUpdate: ServiceFunction<
        object,
        T,
        {
          // The add-on to update. @example core_ssh
          addon: string;
        }
      >;
      // Writes data to the add-on's standard input.
      addonStdin: ServiceFunction<
        object,
        T,
        {
          // The add-on to write to. @example core_ssh
          addon: string;
        }
      >;
      // Powers off the host system.
      hostShutdown: ServiceFunction<object, T, object>;
      // Reboots the host system.
      hostReboot: ServiceFunction<object, T, object>;
      // Creates a full backup.
      backupFull: ServiceFunction<
        object,
        T,
        {
          // Optional (default = current date and time). @example Backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: string;
          // Exclude the Home Assistant database file from the backup.
          homeassistant_exclude_database?: boolean;
        }
      >;
      // Creates a partial backup.
      backupPartial: ServiceFunction<
        object,
        T,
        {
          // Includes Home Assistant settings in the backup.
          homeassistant?: boolean;
          // Exclude the Home Assistant database file from the backup.
          homeassistant_exclude_database?: boolean;
          // List of add-ons to include in the backup. Use the name slug of each add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // List of directories to include in the backup. @example homeassistant,share
          folders?: object;
          // Optional (default = current date and time). @example Partial backup 1
          name?: string;
          // Password to protect the backup with. @example password
          password?: string;
          // Compresses the backup files.
          compressed?: boolean;
          // Name of a backup network storage to host backups. @example my_backup_mount
          location?: string;
        }
      >;
      // Restores from full backup.
      restoreFull: ServiceFunction<
        object,
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Optional password. @example password
          password?: string;
        }
      >;
      // Restores from a partial backup.
      restorePartial: ServiceFunction<
        object,
        T,
        {
          // Slug of backup to restore from.
          slug: string;
          // Restores Home Assistant.
          homeassistant?: boolean;
          // List of directories to restore from the backup. @example homeassistant,share
          folders?: object;
          // List of add-ons to restore from the backup. Use the name slug of each add-on. @example core_ssh,core_samba,core_mosquitto
          addons?: object;
          // Optional password. @example password
          password?: string;
        }
      >;
    };
    update: {
      // Installs an update for a device or service.
      install: ServiceFunction<
        object,
        T,
        {
          // The version to install. If omitted, the latest version will be installed. @example 1.0.0
          version?: string;
          // If supported by the integration, this creates a backup before starting the update.
          backup?: boolean;
        }
      >;
      // Marks currently available update as skipped.
      skip: ServiceFunction<object, T, object>;
      // Removes the skipped version marker from an update.
      clearSkipped: ServiceFunction<object, T, object>;
    };
    cloud: {
      // Makes the instance UI accessible from outside of the local network by enabling your Home Assistant Cloud connection.
      remoteConnect: ServiceFunction<object, T, object>;
      // Disconnects the instance UI from Home Assistant Cloud. This disables access to it from outside your local network.
      remoteDisconnect: ServiceFunction<object, T, object>;
    };
    ffmpeg: {
      // Sends a start command to an FFmpeg-based sensor.
      start: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will start. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a stop command to an FFmpeg-based sensor.
      stop: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will stop. Platform dependent.
          entity_id?: string;
        }
      >;
      // Sends a restart command to an FFmpeg-based sensor.
      restart: ServiceFunction<
        object,
        T,
        {
          // Name of entity that will restart. Platform dependent.
          entity_id?: string;
        }
      >;
    };
    tts: {
      // Speaks something using text-to-speech on a media player.
      speak: ServiceFunction<
        object,
        T,
        {
          // Media players to play the message.
          media_player_entity_id: string;
          // The text you want to convert into speech so that you can listen to it on your device. @example My name is hanna
          message: string;
          // Stores this message locally so that when the text is requested again, the output can be produced more quickly.
          cache?: boolean;
          // Language to use for speech generation. @example ru
          language?: string;
          // A dictionary containing integration-specific options. @example platform specific
          options?: object;
        }
      >;
      // Removes all cached text-to-speech files and purges the memory.
      clearCache: ServiceFunction<object, T, object>;
      // Say something using text-to-speech on a media player with cloud.
      cloudSay: ServiceFunction<
        object,
        T,
        {
          //
          entity_id: string;
          //  @example My name is hanna
          message: string;
          //
          cache?: boolean;
          //  @example ru
          language?: string;
          //  @example platform specific
          options?: object;
        }
      >;
    };
    rest: {
      // Reloads REST entities from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    template: {
      // Reloads template entities from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    historyStats: {
      // Reloads history stats sensors from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    conversation: {
      // Launches a conversation from a transcribed text.
      process: ServiceFunction<
        object,
        T,
        {
          // Transcribed text input. @example Turn all lights on
          text: string;
          // Language of text. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to process your request. The conversation agent is the brains of your assistant. It processes the incoming text commands. @example homeassistant
          agent_id?: string;
          // ID of the conversation, to be able to continue a previous conversation @example my_conversation_1
          conversation_id?: string;
        }
      >;
      // Reloads the intent configuration.
      reload: ServiceFunction<
        object,
        T,
        {
          // Language to clear cached intents for. Defaults to server language. @example NL
          language?: string;
          // Conversation agent to reload. @example homeassistant
          agent_id?: string;
        }
      >;
    };
    assistSatellite: {
      // Lets a satellite announce a message.
      announce: ServiceFunction<
        object,
        T,
        {
          // The message to announce. @example Time to wake up!
          message?: string;
          // The media ID to announce instead of using text-to-speech.
          media_id?: string;
          // Play a sound before the announcement.
          preannounce?: boolean;
          // Custom media ID to play before the announcement.
          preannounce_media_id?: string;
        }
      >;
      // Starts a conversation from a satellite.
      startConversation: ServiceFunction<
        object,
        T,
        {
          // The message to start with. @example You left the lights on in the living room. Turn them off?
          start_message?: string;
          // The media ID to start with instead of using text-to-speech.
          start_media_id?: string;
          // Provide background information to the AI about the request.
          extra_system_prompt?: string;
          // Play a sound before the start message or media.
          preannounce?: boolean;
          // Custom media ID to play before the start message or media.
          preannounce_media_id?: string;
        }
      >;
    };
    number: {
      // Sets the value of a number.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value to set. @example 42
          value: string;
        }
      >;
      // Increase a number entity value by a certain amount.
      increment: ServiceFunction<
        object,
        T,
        {
          // The amount to increase the number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Set a number entity to its minimum value.
      min: ServiceFunction<object, T, object>;
      // Decrease a number entity value by a certain amount.
      decrement: ServiceFunction<
        object,
        T,
        {
          // The amount to decrease the number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Set a number entity to its maximum value.
      max: ServiceFunction<object, T, object>;
    };
    light: {
      // Turns on one or more lights and adjusts their properties, even when they are turned on already.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // Color temperature in Kelvin. @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: any;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          brightness_pct?: number;
          // Change brightness by a percentage. @constraints  number: min: -100, max: 100, unit_of_measurement: %
          brightness_step_pct?: number;
          // Light effect.
          effect?: string;
          //  @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          //  @example [300, 70]
          hs_color?: [number, number];
          //  @example [0.52, 0.43]
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number | object;
          //  @constraints  number: min: 0, max: 255
          brightness?: number;
          //  @constraints  number: min: -225, max: 255
          brightness_step?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: "long" | "short";
        }
      >;
      // Turns off one or more lights.
      turnOff: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          //
          flash?: "long" | "short";
        }
      >;
      // Toggles one or more lights, from on to off, or off to on, based on their current state.
      toggle: ServiceFunction<
        object,
        T,
        {
          // Duration it takes to get to next state. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
          // The color in RGB format. A list of three integers between 0 and 255 representing the values of red, green, and blue. @example [255, 100, 100]
          rgb_color?: [number, number, number];
          // Color temperature in Kelvin. @constraints  color_temp: unit: kelvin, min: 2000, max: 6500
          color_temp_kelvin?: any;
          // Number indicating the percentage of full brightness, where 0 turns the light off, 1 is the minimum brightness, and 100 is the maximum brightness. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          brightness_pct?: number;
          // Light effect.
          effect?: string;
          //  @example [255, 100, 100, 50]
          rgbw_color?: [number, number, number, number];
          //  @example [255, 100, 100, 50, 70]
          rgbww_color?: [number, number, number, number, number];
          //
          color_name?:
            | "homeassistant"
            | "aliceblue"
            | "antiquewhite"
            | "aqua"
            | "aquamarine"
            | "azure"
            | "beige"
            | "bisque"
            | "blanchedalmond"
            | "blue"
            | "blueviolet"
            | "brown"
            | "burlywood"
            | "cadetblue"
            | "chartreuse"
            | "chocolate"
            | "coral"
            | "cornflowerblue"
            | "cornsilk"
            | "crimson"
            | "cyan"
            | "darkblue"
            | "darkcyan"
            | "darkgoldenrod"
            | "darkgray"
            | "darkgreen"
            | "darkgrey"
            | "darkkhaki"
            | "darkmagenta"
            | "darkolivegreen"
            | "darkorange"
            | "darkorchid"
            | "darkred"
            | "darksalmon"
            | "darkseagreen"
            | "darkslateblue"
            | "darkslategray"
            | "darkslategrey"
            | "darkturquoise"
            | "darkviolet"
            | "deeppink"
            | "deepskyblue"
            | "dimgray"
            | "dimgrey"
            | "dodgerblue"
            | "firebrick"
            | "floralwhite"
            | "forestgreen"
            | "fuchsia"
            | "gainsboro"
            | "ghostwhite"
            | "gold"
            | "goldenrod"
            | "gray"
            | "green"
            | "greenyellow"
            | "grey"
            | "honeydew"
            | "hotpink"
            | "indianred"
            | "indigo"
            | "ivory"
            | "khaki"
            | "lavender"
            | "lavenderblush"
            | "lawngreen"
            | "lemonchiffon"
            | "lightblue"
            | "lightcoral"
            | "lightcyan"
            | "lightgoldenrodyellow"
            | "lightgray"
            | "lightgreen"
            | "lightgrey"
            | "lightpink"
            | "lightsalmon"
            | "lightseagreen"
            | "lightskyblue"
            | "lightslategray"
            | "lightslategrey"
            | "lightsteelblue"
            | "lightyellow"
            | "lime"
            | "limegreen"
            | "linen"
            | "magenta"
            | "maroon"
            | "mediumaquamarine"
            | "mediumblue"
            | "mediumorchid"
            | "mediumpurple"
            | "mediumseagreen"
            | "mediumslateblue"
            | "mediumspringgreen"
            | "mediumturquoise"
            | "mediumvioletred"
            | "midnightblue"
            | "mintcream"
            | "mistyrose"
            | "moccasin"
            | "navajowhite"
            | "navy"
            | "navyblue"
            | "oldlace"
            | "olive"
            | "olivedrab"
            | "orange"
            | "orangered"
            | "orchid"
            | "palegoldenrod"
            | "palegreen"
            | "paleturquoise"
            | "palevioletred"
            | "papayawhip"
            | "peachpuff"
            | "peru"
            | "pink"
            | "plum"
            | "powderblue"
            | "purple"
            | "red"
            | "rosybrown"
            | "royalblue"
            | "saddlebrown"
            | "salmon"
            | "sandybrown"
            | "seagreen"
            | "seashell"
            | "sienna"
            | "silver"
            | "skyblue"
            | "slateblue"
            | "slategray"
            | "slategrey"
            | "snow"
            | "springgreen"
            | "steelblue"
            | "tan"
            | "teal"
            | "thistle"
            | "tomato"
            | "turquoise"
            | "violet"
            | "wheat"
            | "white"
            | "whitesmoke"
            | "yellow"
            | "yellowgreen";
          //  @example [300, 70]
          hs_color?: [number, number];
          //  @example [0.52, 0.43]
          xy_color?: [number, number];
          //  @constraints  color_temp: unit: mired, min: 153, max: 500
          color_temp?: number | object;
          //  @constraints  number: min: 0, max: 255
          brightness?: number;
          //
          white?: boolean;
          //  @example relax
          profile?: string;
          //
          flash?: "long" | "short";
        }
      >;
    };
    scene: {
      // Reloads the scenes from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Activates a scene with configuration.
      apply: ServiceFunction<
        object,
        T,
        {
          // List of entities and their target state. @example light.kitchen: 'on' light.ceiling:   state: 'on'   brightness: 80
          entities: object;
          // Time it takes the devices to transition into the states defined in the scene. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
        }
      >;
      // Creates a new scene.
      create: ServiceFunction<
        object,
        T,
        {
          // The entity ID of the new scene. @example all_lights
          scene_id: string;
          // List of entities and their target state. If your entities are already in the target state right now, use 'Entities snapshot' instead. @example light.tv_back_light: 'on' light.ceiling:   state: 'on'   brightness: 200
          entities?: object;
          // List of entities to be included in the snapshot. By taking a snapshot, you record the current state of those entities. If you do not want to use the current state of all your entities for this scene, you can combine 'Entities snapshot' with 'Entity states'. @example - light.ceiling - light.kitchen
          snapshot_entities?: string;
        }
      >;
      // Deletes a dynamically created scene.
      delete: ServiceFunction<object, T, object>;
      // Activates a scene.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Time it takes the devices to transition into the states defined in the scene. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          transition?: number;
        }
      >;
    };
    camera: {
      // Enables the motion detection.
      enableMotionDetection: ServiceFunction<object, T, object>;
      // Disables the motion detection.
      disableMotionDetection: ServiceFunction<object, T, object>;
      // Turns off the camera.
      turnOff: ServiceFunction<object, T, object>;
      // Turns on the camera.
      turnOn: ServiceFunction<object, T, object>;
      // Takes a snapshot from a camera.
      snapshot: ServiceFunction<
        object,
        T,
        {
          // Full path to filename. @example /tmp/snapshot_{{ entity_id.name }}.jpg
          filename: string;
        }
      >;
      // Plays the camera stream on a supported media player.
      playStream: ServiceFunction<
        object,
        T,
        {
          // Media players to stream to.
          media_player: string;
          // Stream format supported by the media player.
          format?: "hls";
        }
      >;
      // Creates a recording of a live camera feed.
      record: ServiceFunction<
        object,
        T,
        {
          // Full path to filename. Must be mp4. @example /tmp/snapshot_{{ entity_id.name }}.mp4
          filename: string;
          // Planned duration of the recording. The actual duration may vary. @constraints  number: min: 1, max: 3600, unit_of_measurement: seconds
          duration?: number;
          // Planned lookback period to include in the recording (in addition to the duration). Only available if there is currently an active HLS stream. The actual length of the lookback period may vary. @constraints  number: min: 0, max: 300, unit_of_measurement: seconds
          lookback?: number;
        }
      >;
    };
    group: {
      // Reloads group configuration, entities, and notify services from YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Creates/Updates a group.
      set: ServiceFunction<
        object,
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: string;
          // Name of the group. @example My test group
          name?: string;
          // Name of the icon for the group. @example mdi:camera
          icon?: string;
          // List of all members in the group. Cannot be used in combination with `Add entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          entities?: string;
          // List of members to be added to the group. Cannot be used in combination with `Entities` or `Remove entities`. @example domain.entity_id1, domain.entity_id2
          add_entities?: string;
          // List of members to be removed from a group. Cannot be used in combination with `Entities` or `Add entities`. @example domain.entity_id1, domain.entity_id2
          remove_entities?: string;
          // Enable this option if the group should only be used when all entities are in state `on`.
          all?: boolean;
        }
      >;
      // Removes a group.
      remove: ServiceFunction<
        object,
        T,
        {
          // Object ID of this group. This object ID is used as part of the entity ID. Entity ID format: [domain].[object_id]. @example test_group
          object_id: object;
        }
      >;
    };
    mediaPlayer: {
      // Turns on the power of the media player.
      turnOn: ServiceFunction<object, T, object>;
      // Turns off the power of the media player.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles a media player on/off.
      toggle: ServiceFunction<object, T, object>;
      // Turns up the volume.
      volumeUp: ServiceFunction<object, T, object>;
      // Turns down the volume.
      volumeDown: ServiceFunction<object, T, object>;
      // Toggles play/pause.
      mediaPlayPause: ServiceFunction<object, T, object>;
      // Starts playing.
      mediaPlay: ServiceFunction<object, T, object>;
      // Pauses.
      mediaPause: ServiceFunction<object, T, object>;
      // Stops playing.
      mediaStop: ServiceFunction<object, T, object>;
      // Selects the next track.
      mediaNextTrack: ServiceFunction<object, T, object>;
      // Selects the previous track.
      mediaPreviousTrack: ServiceFunction<object, T, object>;
      // Removes all items from the playlist.
      clearPlaylist: ServiceFunction<object, T, object>;
      // Sets the volume level.
      volumeSet: ServiceFunction<
        object,
        T,
        {
          // The volume. 0 is inaudible, 1 is the maximum volume. @constraints  number: min: 0, max: 1, step: 0.01
          volume_level: number;
        }
      >;
      // Mutes or unmutes the media player.
      volumeMute: ServiceFunction<
        object,
        T,
        {
          // Defines whether or not it is muted.
          is_volume_muted: boolean;
        }
      >;
      // Allows you to go to a different part of the media that is currently playing.
      mediaSeek: ServiceFunction<
        object,
        T,
        {
          // Target position in the currently playing media. The format is platform dependent. @constraints  number: min: 0, max: 9223372036854776000, step: 0.01, mode: box
          seek_position: number;
        }
      >;
      // Groups media players together for synchronous playback. Only works on supported multiroom audio systems.
      join: ServiceFunction<
        object,
        T,
        {
          // The players which will be synced with the playback specified in 'Targets'. @example - media_player.multiroom_player2 - media_player.multiroom_player3
          group_members: string[];
        }
      >;
      // Sends the media player the command to change input source.
      selectSource: ServiceFunction<
        object,
        T,
        {
          // Name of the source to switch to. Platform dependent. @example video1
          source: string;
        }
      >;
      // Selects a specific sound mode.
      selectSoundMode: ServiceFunction<
        object,
        T,
        {
          // Name of the sound mode to switch to. @example Music
          sound_mode?: string;
        }
      >;
      // Starts playing specified media.
      playMedia: ServiceFunction<
        object,
        T,
        {
          // The ID of the content to play. Platform dependent. @example https://home-assistant.io/images/cast/splash.png
          media_content_id: string | number;
          // The type of the content to play, such as image, music, tv show, video, episode, channel, or playlist. @example music
          media_content_type: string;
          // If the content should be played now or be added to the queue.
          enqueue?: "play" | "next" | "add" | "replace";
          // If the media should be played as an announcement. @example true
          announce?: boolean;
        }
      >;
      // Browses the available media.
      browseMedia: ServiceFunction<
        object,
        T,
        {
          // The type of the content to browse, such as image, music, tv show, video, episode, channel, or playlist. @example music
          media_content_type?: string;
          // The ID of the content to browse. Integration dependent. @example A:ALBUMARTIST/Beatles
          media_content_id?: string | number;
        }
      >;
      // Enables or disables the shuffle mode.
      shuffleSet: ServiceFunction<
        object,
        T,
        {
          // Whether the media should be played in randomized order or not.
          shuffle: boolean;
        }
      >;
      // Removes the player from a group. Only works on platforms which support player groups.
      unjoin: ServiceFunction<object, T, object>;
      // Sets the repeat mode.
      repeatSet: ServiceFunction<
        object,
        T,
        {
          // Whether the media (one or all) should be played in a loop or not.
          repeat: "off" | "all" | "one";
        }
      >;
    };
    notify: {
      // Sends a notification message.
      sendMessage: ServiceFunction<
        object,
        T,
        {
          // Your notification message.
          message: string;
          // Title for your notification message.
          title?: string;
        }
      >;
      // Sends a notification that is visible in the notifications panel.
      persistentNotification: ServiceFunction<
        object,
        T,
        {
          // Message body of the notification. @example The garage door has been open for 10 minutes.
          message: string;
          // Title of the notification. @example Your Garage Door Friend
          title?: string;
          // Some integrations provide extended functionality via this field. For more information, refer to the integration documentation. @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the benjamin_phone service.
      benjaminPhone: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the std_critical service.
      stdCritical: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the all_phones service.
      allPhones: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the std_warning service.
      stdWarning: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the wilma_phone service.
      wilmaPhone: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the android_tv service.
      androidTv: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_galaxy_watch4_bthm integration.
      mobileAppGalaxyWatch4Bthm: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_quest integration.
      mobileAppQuest: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_samsung_s21 integration.
      mobileAppSamsungS21: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the mobile_app_wilmisen integration.
      mobileAppWilmisen: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the notify service.
      notify: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
      // Sends a notification message using the std_information service.
      stdInformation: ServiceFunction<
        object,
        T,
        {
          //  @example The garage door has been open for 10 minutes.
          message: string;
          //  @example Your Garage Door Friend
          title?: string;
          //  @example platform specific
          target?: object;
          //  @example platform specific
          data?: object;
        }
      >;
    };
    select: {
      // Selects the first option.
      selectFirst: ServiceFunction<object, T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<object, T, object>;
      // Selects the next option.
      selectNext: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the last to the first.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        object,
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the first to the last.
          cycle?: boolean;
        }
      >;
      // Select an random option for a select entity.
      random: ServiceFunction<
        object,
        T,
        {
          // Limits the options to select from. If not provided, all options will be considered.
          options?: object;
        }
      >;
    };
    inputButton: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Mimics the physical button press on the device.
      press: ServiceFunction<object, T, object>;
    };
    backup: {
      // Creates a new backup with automatic backup settings.
      createAutomatic: ServiceFunction<object, T, object>;
    };
    logbook: {
      // Creates a custom entry in the logbook.
      log: ServiceFunction<
        object,
        T,
        {
          // Custom name for an entity, can be referenced using the 'Entity ID' field. @example Kitchen
          name: string;
          // Message of the logbook entry. @example is being used
          message: string;
          // Entity to reference in the logbook entry.
          entity_id?: string;
          // Determines which icon is used in the logbook entry. The icon illustrates the integration domain related to this logbook entry. @example light
          domain?: string;
        }
      >;
    };
    mqtt: {
      // Publishes a message to an MQTT topic.
      publish: ServiceFunction<
        object,
        T,
        {
          // Topic to publish to. @example /homeassistant/hello
          topic: string;
          // The payload to publish. Publishes an empty message if not provided. @example The temperature is {{ states('sensor.temperature') }}
          payload?: any;
          // If 'Payload' is a Python bytes literal, evaluate the bytes literal and publish the raw data.
          evaluate_payload?: boolean;
          // Quality of Service to use. 0: At most once. 1: At least once. 2: Exactly once.
          qos?: "0" | "1" | "2";
          // If the message should have the retain flag set. If set, the broker stores the most recent message on a topic.
          retain?: boolean;
        }
      >;
      // Writes all messages on a specific topic into the `mqtt_dump.txt` file in your configuration folder.
      dump: ServiceFunction<
        object,
        T,
        {
          // Topic to listen to. @example OpenZWave/#
          topic?: string;
          // How long we should listen for messages in seconds. @constraints  number: min: 1, max: 300, unit_of_measurement: seconds
          duration?: number;
        }
      >;
      // Reloads MQTT entities from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    alert: {
      // Silences alert's notifications.
      turnOff: ServiceFunction<object, T, object>;
      // Resets alert's notifications.
      turnOn: ServiceFunction<object, T, object>;
      // Toggles alert's notifications.
      toggle: ServiceFunction<object, T, object>;
    };
    zone: {
      // Reloads zones from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Update properties of a zone on the fly.
      update: ServiceFunction<
        object,
        T,
        {
          // The ID of the entity (or entities) to update.
          entity_id: string;
          // Name of the zone
          name?: string;
          // Icon to use for the zone @constraints  icon: placeholder: mdi:map-marker
          icon?: string;
          // Latitude of the zone @constraints  number: min: -90, max: 90, step: any, mode: box, unit_of_measurement: °
          latitude?: number;
          // Longitude of the zone @constraints  number: min: -180, max: 180, step: any, mode: box, unit_of_measurement: °
          longitude?: number;
          // Radius of the zone @constraints  number: min: 0, max: 999999999999, step: any, unit_of_measurement: m, mode: box
          radius?: number;
        }
      >;
      // Delete a zone. This works only with zones created and managed via the UI. Zones created and managed in YAML cannot be managed by Spook.
      delete: ServiceFunction<
        object,
        T,
        {
          // The ID of the entity (or entities) to remove.
          entity_id: string;
        }
      >;
      // Create a new zone in Home Assistant on the fly.
      create: ServiceFunction<
        object,
        T,
        {
          // Name of the zone
          name: string;
          // Icon to use for the zone @constraints  icon: placeholder: mdi:map-marker
          icon?: string;
          // Latitude of the zone @constraints  number: min: -90, max: 90, step: any, mode: box, unit_of_measurement: °
          latitude: number;
          // Longitude of the zone @constraints  number: min: -180, max: 180, step: any, mode: box, unit_of_measurement: °
          longitude: number;
          // Radius of the zone @constraints  number: min: 0, max: 999999999999, unit_of_measurement: m, mode: box
          radius?: number;
        }
      >;
    };
    timer: {
      // Reloads timers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Starts a timer or restarts it with a provided duration.
      start: ServiceFunction<
        object,
        T,
        {
          // Custom duration to restart the timer with. @example 00:01:00 or 60
          duration?: string;
        }
      >;
      // Pauses a running timer, retaining the remaining duration for later continuation.
      pause: ServiceFunction<object, T, object>;
      // Resets a timer's duration to the last known initial value without firing the timer finished event.
      cancel: ServiceFunction<object, T, object>;
      // Finishes a running timer earlier than scheduled.
      finish: ServiceFunction<object, T, object>;
      // Changes a timer by adding or subtracting a given duration.
      change: ServiceFunction<
        object,
        T,
        {
          // Duration to add to or subtract from the running timer. @example 00:01:00, 60 or -60
          duration: string;
        }
      >;
      // Set duration for an existing timer.
      setDuration: ServiceFunction<
        object,
        T,
        {
          // New duration for the timer, as a timedelta string. @example 00:01:00, 60
          duration: string;
        }
      >;
    };
    inputNumber: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value. @constraints  number: min: 0, max: 9223372036854776000, step: 0.001, mode: box
          value: number;
        }
      >;
      // Increase an input number entity value by a certain amount.
      increment: ServiceFunction<
        object,
        T,
        {
          // The amount to increase the input number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Set an input number entity to its minimum value.
      min: ServiceFunction<object, T, object>;
      // Decrease an input number entity value by a certain amount.
      decrement: ServiceFunction<
        object,
        T,
        {
          // The amount to decrease the input number with. If not provided, the step of the number entity will be used.
          amount?: number;
        }
      >;
      // Set an input number entity to its maximum value.
      max: ServiceFunction<object, T, object>;
    };
    inputSelect: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Selects the first option.
      selectFirst: ServiceFunction<object, T, object>;
      // Selects the last option.
      selectLast: ServiceFunction<object, T, object>;
      // Selects the next option.
      selectNext: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the last to the first option on the list.
          cycle?: boolean;
        }
      >;
      // Selects an option.
      selectOption: ServiceFunction<
        object,
        T,
        {
          // Option to be selected. @example 'Item A'
          option: string;
        }
      >;
      // Selects the previous option.
      selectPrevious: ServiceFunction<
        object,
        T,
        {
          // If the option should cycle from the first to the last option on the list.
          cycle?: boolean;
        }
      >;
      // Sets the options.
      setOptions: ServiceFunction<
        object,
        T,
        {
          // List of options. @example ['Item A', 'Item B', 'Item C']
          options: string;
        }
      >;
      // Select an random option for an input_select entity.
      random: ServiceFunction<
        object,
        T,
        {
          // Limits the options to select from. If not provided, all options will be considered.
          options?: object;
        }
      >;
      // Sorts the list of selectable options for an `input_select` entity. This is not persistent and will be undone once reloaded or Home Assistant restarts.
      sort: ServiceFunction<object, T, object>;
      // Shuffles the list of selectable options for an `input_select` entity. This is not persistent and will be undone once reloaded or Home Assistant restarts.
      shuffle: ServiceFunction<object, T, object>;
    };
    inputBoolean: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Turns on the helper.
      turnOn: ServiceFunction<object, T, object>;
      // Turns off the helper.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles the helper on/off.
      toggle: ServiceFunction<object, T, object>;
    };
    wakeOnLan: {
      // Sends a 'magic packet' to wake up a device with 'Wake-On-LAN' capabilities.
      sendMagicPacket: ServiceFunction<
        object,
        T,
        {
          // MAC address of the device to wake up. @example aa:bb:cc:dd:ee:ff
          mac: string;
          // The IP address of the host to send the magic packet to. Defaults to `255.255.255.255` and is normally not changed. @example 192.168.255.255
          broadcast_address?: string;
          // The port to send the magic packet to. Defaults to `9` and is normally not changed. @constraints  number: min: 1, max: 65535, mode: box
          broadcast_port?: number;
        }
      >;
    };
    intentScript: {
      // Reloads the intent script from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    opnsense: {
      // Closes one or all notices on OPNsense
      closeNotice: ServiceFunction<
        object,
        T,
        {
          // The notice ID to clear. Enter 'all' to clear all notices. @example all
          id: string;
          //
          multiple_opnsense?: object;
        }
      >;
      // Starts an OPNsense service
      startService: ServiceFunction<
        object,
        T,
        {
          // The ID or name of the service. Like: udpbroadcastrelay/3, haproxy, dhcp, etc.
          service_id?: string;
          //
          multiple_opnsense?: object;
        }
      >;
      // Stops an OPNsense service
      stopService: ServiceFunction<
        object,
        T,
        {
          // The ID or name of the service. Like: udpbroadcastrelay/3, haproxy, dhcp, etc.
          service_id?: string;
          //
          multiple_opnsense?: object;
        }
      >;
      // Restarts an OPNsense service
      restartService: ServiceFunction<
        object,
        T,
        {
          // The ID or name of the service. Like: udpbroadcastrelay/3, haproxy, dhcp, etc.
          service_id?: string;
          // Restart the service only if it is already running.
          only_if_running: boolean;
          //
          multiple_opnsense?: object;
        }
      >;
      // Halts the OPNsense Router
      systemHalt: ServiceFunction<
        object,
        T,
        {
          // Only needed if there is more than one OPNsense Router. Select the OPNsense Router to call the command on. If not specified, the command will be sent to all OPNsense Routers.
          device_id?: string;
          // Only needed if there is more than one OPNsense Router. Pick any sensor in the OPNsense Router you want to call the command on. If not specified, the command will be sent to all OPNsense Routers. @example sensor.opnsense_interface_lan_status
          entity_id?: string;
        }
      >;
      // Reboots the OPNsense Router
      systemReboot: ServiceFunction<
        object,
        T,
        {
          // Only needed if there is more than one OPNsense Router. Select the OPNsense Router to call the command on. If not specified, the command will be sent to all OPNsense Routers.
          device_id?: string;
          // Only needed if there is more than one OPNsense Router. Pick any sensor in the OPNsense Router you want to call the command on. If not specified, the command will be sent to all OPNsense Routers. @example sensor.opnsense_interface_lan_status
          entity_id?: string;
        }
      >;
      // Sends a wake-on-lan magic packet
      sendWol: ServiceFunction<
        object,
        T,
        {
          // The name of the interface. Like: wan|lan|opt1|opt2|..
          interface: string;
          // The target mac address.
          mac: string;
          //
          multiple_opnsense?: object;
        }
      >;
      //
      reloadInterface: ServiceFunction<
        object,
        T,
        {
          // The name of the interface. Like: wan|lan|opt1|opt2|..
          interface: string;
          //
          multiple_opnsense?: object;
        }
      >;
      //
      generateVouchers: ServiceFunction<
        object,
        T,
        {
          // If manually entering a duration, enter in seconds
          validity:
            | "14400"
            | "28800"
            | "86400"
            | "undefined"
            | "259200"
            | "345600"
            | "432000"
            | "518400"
            | "604800"
            | "1209600";
          // If manually entering a duration, enter in seconds
          expirytime:
            | "0"
            | "21600"
            | "43200"
            | "86400"
            | "172800"
            | "259200"
            | "345600"
            | "432000"
            | "518400"
            | "604800"
            | "1209600"
            | "1814400"
            | "2419200"
            | "4838400"
            | "7257600";
          //  @constraints  number: min: 1, step: 1, mode: box
          count: number;
          //
          vouchergroup: string;
          // OPTIONAL: Only needed if there is more than one Captive Portal Voucher Server
          voucher_server?: string;
          //
          multiple_opnsense?: object;
        }
      >;
      //
      killStates: ServiceFunction<
        object,
        T,
        {
          // The IP Address to kill all states for. ipv4 or ipv6 accepted @example 192.168.0.100
          ip_addr: string;
          //
          multiple_opnsense?: object;
        }
      >;
      //
      toggleAlias: ServiceFunction<
        object,
        T,
        {
          //  @example iphones
          alias: string;
          //
          toggle_on_off: "toggle" | "on" | "off";
          //
          multiple_opnsense?: object;
        }
      >;
    };
    swemail: {
      // Refreshes all data outside of normal times
      fetchData: ServiceFunction<object, T, object>;
    };
    schedule: {
      // Reloads schedules from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Retrieves the configured time ranges of one or multiple schedules.
      getSchedule: ServiceFunction<object, T, object>;
    };
    counter: {
      // Increments a counter by its step size.
      increment: ServiceFunction<object, T, object>;
      // Decrements a counter by its step size.
      decrement: ServiceFunction<object, T, object>;
      // Resets a counter to its initial value.
      reset: ServiceFunction<object, T, object>;
      // Sets the counter to a specific value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The new counter value the entity should be set to. @constraints  number: min: 0, max: 9223372036854776000, mode: box
          value: number;
        }
      >;
    };
    calendar: {
      // Adds a new calendar event.
      createEvent: ServiceFunction<
        object,
        T,
        {
          // Defines the short summary or subject for the event. @example Department Party
          summary: string;
          // A more complete description of the event than the one provided by the summary. @example Meeting to provide technical review for 'Phoenix' design.
          description?: string;
          // The date and time the event should start. @example 2022-03-22 20:00:00
          start_date_time?: string;
          // The date and time the event should end. @example 2022-03-22 22:00:00
          end_date_time?: string;
          // The date the all-day event should start. @example 2022-03-22
          start_date?: string;
          // The date the all-day event should end (exclusive). @example 2022-03-23
          end_date?: string;
          // Days or weeks that you want to create the event in. @example {'days': 2} or {'weeks': 2}
          in?: object;
          // The location of the event. @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
      // Retrieves events on a calendar within a time range.
      getEvents: ServiceFunction<
        object,
        T,
        {
          // Returns active events after this time (exclusive). When not set, defaults to now. @example 2022-03-22 20:00:00
          start_date_time?: string;
          // Returns active events before this time (exclusive). Cannot be used with Duration. @example 2022-03-22 22:00:00
          end_date_time?: string;
          // Returns active events from Start time for the specified duration.
          duration?: {
            hours?: number;
            days?: number;
            minutes?: number;
            seconds?: number;
          };
        }
      >;
    };
    zwaveJs: {
      // Changes the configuration parameters of your Z-Wave devices.
      setConfigParameter: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The configuration parameter's endpoint. @example 1
          endpoint?: string;
          // The name (or ID) of the configuration parameter you want to configure. @example Minimum brightness level
          parameter: string;
          // Target a specific bitmask (see the documentation for more information). Cannot be combined with 'Value size' or 'Value format'.
          bitmask?: string;
          // The new value to set for this configuration parameter. @example 5
          value: string;
          // Size of the value, either 1, 2, or 4. Used in combination with 'Value format' when a config parameter is not defined in your device's configuration file. Cannot be combined with 'Bitmask'. @example 1 @constraints  number: min: 1, max: 4
          value_size?: number;
          // Format of the value, 0 for signed integer, 1 for unsigned integer, 2 for enumerated, 3 for bitfield. Used in combination with 'Value size' when a config parameter is not defined in your device's configuration file. Cannot be combined with 'Bitmask'. @example 1 @constraints  number: min: 0, max: 3
          value_format?: number;
        }
      >;
      // Allows for bulk setting partial parameters. Useful when multiple partial parameters have to be set at the same time.
      bulkSetPartialConfigParameters: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The configuration parameter's endpoint. @example 1
          endpoint?: string;
          // The name (or ID) of the configuration parameter you want to configure. @example 9
          parameter: string;
          // The new value(s) to set for this configuration parameter. Can either be a raw integer value to represent the bulk change or a mapping where the key is the bitmask (either in hex or integer form) and the value is the new value you want to set for that partial parameter. @example '0x1': 1 '0x10': 1 '0x20': 1 '0x40': 1
          value: object;
        }
      >;
      // Force updates the values of a Z-Wave entity.
      refreshValue: ServiceFunction<
        object,
        T,
        {
          // Entities to refresh. @example - sensor.family_room_motion - switch.kitchen
          entity_id: string;
          // Whether to refresh all values or just the primary value.
          refresh_all_values?: boolean;
        }
      >;
      // Changes any value that Z-Wave recognizes on a Z-Wave device. This action has minimal validation so only use this action if you know what you are doing.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The ID of the command class for the value. @example 117
          command_class: string;
          // The endpoint for the value. @example 1
          endpoint?: string;
          // The ID of the property for the value. @example currentValue
          property: string;
          // The ID of the property key for the value. @example 1
          property_key?: string;
          // The new value to set. @example ffbb99
          value: object;
          // Set value options map. Refer to the Z-Wave documentation for more information on what options can be set.
          options?: object;
          // Whether to wait for a response from the node. If not included in the payload, the integration will decide whether to wait or not. If enabled, the action can take a while if setting a value on an asleep battery device.
          wait_for_result?: boolean;
        }
      >;
      // Changes any value that Z-Wave recognizes on multiple Z-Wave devices using multicast, so all devices receive the message simultaneously. This action has minimal validation so only use this action if you know what you are doing.
      multicastSetValue: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // Whether the command should be broadcast to all devices on the network. @example true
          broadcast?: boolean;
          // The ID of the command class for the value. @example 117
          command_class: string;
          // The endpoint for the value. @example 1
          endpoint?: string;
          // The ID of the property for the value. @example currentValue
          property: string;
          // The ID of the property key for the value. @example 1
          property_key?: string;
          // Set value options map. Refer to the Z-Wave documentation for more information on what options can be set.
          options?: object;
          // The new value to set. @example ffbb99
          value: object;
        }
      >;
      // Forces Z-Wave to try to reach a node. This can be used to update the status of the node in Z-Wave when you think it doesn't accurately reflect reality, e.g. reviving a failed/dead node or marking the node as asleep.
      ping: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
        }
      >;
      // Calls a Command Class API on a node. Some Command Classes can't be fully controlled via the `set_value` action and require direct calls to the Command Class API.
      invokeCcApi: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The ID of the command class that you want to issue a command to. @example 132
          command_class: string;
          // The endpoint to call the API on. If an endpoint is specified, that endpoint will be targeted for all nodes associated with the target areas, devices, and/or entities. If an endpoint is not specified, the root endpoint (0) will be targeted for nodes associated with target areas and devices, and the endpoint for the primary value of each entity will be targeted. @example 1
          endpoint?: string;
          // The name of the API method to call. Refer to the Z-Wave Command Class API documentation (https://zwave-js.github.io/node-zwave-js/#/api/CCs/index) for available methods. @example setInterval
          method_name: string;
          // A list of parameters to pass to the API method. Refer to the Z-Wave Command Class API documentation (https://zwave-js.github.io/node-zwave-js/#/api/CCs/index) for parameters. @example [1, 1]
          parameters: object;
        }
      >;
      // Refreshes notifications on a node based on notification type and optionally notification event.
      refreshNotifications: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: device: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The Notification Type number as defined in the Z-Wave specs. @example 1 @constraints  number: min: 1, max: 22, mode: box
          notification_type: number;
          // The Notification Event number as defined in the Z-Wave specs. @example 1 @constraints  number: min: 1, max: 255, mode: box
          notification_event?: number;
        }
      >;
      // Sets a user code on a lock.
      setLockUsercode: ServiceFunction<
        object,
        T,
        {
          // Code slot to set the code. @example 1
          code_slot: string;
          // Lock code to set. @example 1234
          usercode: string;
        }
      >;
      // Clears a user code from a lock.
      clearLockUsercode: ServiceFunction<
        object,
        T,
        {
          // Code slot to clear code from. @example 1
          code_slot: string;
        }
      >;
      // Sets the configuration for a lock.
      setLockConfiguration: ServiceFunction<
        object,
        T,
        {
          // The operation type of the lock. @example timed
          operation_type: "constant" | "timed";
          // Seconds until lock mode times out. Should only be used if operation type is `timed`. @example 1 @constraints  number: min: 0, max: 65535, unit_of_measurement: sec
          lock_timeout?: number;
          // Duration in seconds until lock returns to secure state. Only enforced when operation type is `constant`. @example 1 @constraints  number: min: 0, max: 65535, unit_of_measurement: sec
          auto_relock_time?: number;
          // Duration in seconds the latch stays retracted. @example 1 @constraints  number: min: 0, max: 65535, unit_of_measurement: sec
          hold_and_release_time?: number;
          // Whether the motor should help in locking and unlocking. @example true
          twist_assist?: boolean;
          // Whether the lock should run the motor until it hits resistance. @example true
          block_to_block?: boolean;
        }
      >;
      // Resets the meters on a node.
      resetMeter: ServiceFunction<
        object,
        T,
        {
          // The area(s) to target for this action. If an area is specified, all Z-Wave devices and entities in that area will be targeted for this action. @example living_room @constraints  area: entity: [object Object], multiple: true
          area_id?: any;
          // The device(s) to target for this action. @example 8f4219cfa57e23f6f669c4616c2205e2
          device_id?: string;
          // The entity ID(s) to target for this action. @example sensor.living_room_temperature
          entity_id?: string;
          // The type of meter to reset. Not all meters support the ability to pick a meter type to reset. @example 1
          meter_type?: string;
          // The value that meters should be reset to. Not all meters support the ability to be reset to a specific value. @example 5
          value?: string;
        }
      >;
    };
    utilityMeter: {
      // Resets all counters of a utility meter.
      reset: ServiceFunction<object, T, object>;
      // Calibrates a utility meter sensor.
      calibrate: ServiceFunction<
        object,
        T,
        {
          // Value to which set the meter. @example 100
          value: string;
        }
      >;
    };
    openaiConversation: {
      // Sends a conversational query to ChatGPT including any attached image or PDF files
      generateContent: ServiceFunction<
        object,
        T,
        {
          // The config entry to use for this action @constraints  config_entry: integration: openai_conversation
          config_entry: any;
          // The prompt to send @example Hello, how can I help you?
          prompt: string;
          // List of files to upload @example - /path/to/file1.txt - /path/to/file2.txt
          filenames?: string;
        }
      >;
      // Turns a prompt into an image
      generateImage: ServiceFunction<
        object,
        T,
        {
          // The config entry to use for this action @constraints  config_entry: integration: openai_conversation
          config_entry: any;
          // The text to turn into an image @example A photo of a dog
          prompt: string;
          // The size of the image to generate @example 1024x1024
          size?: "1024x1024" | "1024x1792" | "1792x1024";
          // The quality of the image that will be generated @example standard
          quality?: "standard" | "hd";
          // The style of the generated image @example vivid
          style?: "vivid" | "natural";
        }
      >;
    };
    nordpool: {
      // Action that gets the raw hourly price for spesific date from Nordpool
      hourly: ServiceFunction<
        object,
        T,
        {
          // What currecy should the prices be returned in @example NOK
          currency?: object;
          // For what year, default to currect year @example YYYY-MM-DD
          date?: object;
          // Return the prices for what price area @example NO2
          area?: object;
        }
      >;
      // Action that gets the raw aggrigated yearly prices from Nordpool
      yearly: ServiceFunction<
        object,
        T,
        {
          // What currecy should the prices be returned in @example NOK
          currency?: object;
          // For what year, default to currect year @example 2024
          year?: object;
          // Return the prices for what price area @example NO2
          area?: object;
        }
      >;
      // Action that gets the raw aggrigated monthly prices from Nordpool
      monthly: ServiceFunction<
        object,
        T,
        {
          // What currecy should the prices be returned in @example NOK
          currency?: object;
          // For what year, default to currect year @example 2024
          year?: object;
          // Return the prices for what price area @example NO2
          area?: object;
        }
      >;
      // Action that gets the raw aggrigated daily prices from Nordpool
      daily: ServiceFunction<
        object,
        T,
        {
          // What currecy should the prices be returned in @example NOK
          currency?: object;
          // For what year, default to currect year @example 2024
          year?: object;
          // Return the prices for what price area @example NO2
          area?: object;
        }
      >;
      //
      weekly: ServiceFunction<object, T, object>;
    };
    inputText: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The target value. @example This is an example text
          value: string;
        }
      >;
    };
    multiscrape: {
      // Reload all rest entities and notify services
      reload: ServiceFunction<object, T, object>;
      //
      getContent: ServiceFunction<object, T, object>;
      //
      scrape: ServiceFunction<object, T, object>;
      // Triggers an update for the multiscrape scraper_noname_0 integration, independent of the update interval.
      triggerScraperNoname0: ServiceFunction<object, T, object>;
    };
    shellCommand: {
      //
      pushToGit: ServiceFunction<object, T, object>;
      //
      pullGit: ServiceFunction<object, T, object>;
    };
    commandLine: {
      // Reloads command line configuration from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
    };
    inputDatetime: {
      // Reloads helpers from the YAML-configuration.
      reload: ServiceFunction<object, T, object>;
      // Sets the date and/or time.
      setDatetime: ServiceFunction<
        object,
        T,
        {
          // The target date. @example '2019-04-20'
          date?: string;
          // The target time. @example '05:04:20'
          time?: string;
          // The target date & time. @example '2019-04-20 05:04:20'
          datetime?: string;
          // The target date & time, expressed by a UNIX timestamp. @constraints  number: min: 0, max: 9223372036854776000, mode: box
          timestamp?: number;
        }
      >;
    };
    localtuya: {
      // Reload localtuya and reconnect to all devices.
      reload: ServiceFunction<object, T, object>;
      // Change the value of a datapoint (DP)
      setDp: ServiceFunction<
        object,
        T,
        {
          // Device ID of device to change datapoint value for @example 11100118278aab4de001
          device_id?: object;
          // Datapoint index @example 1
          dp?: object;
          // New value to set
          value?: object;
        }
      >;
    };
    cast: {
      // Shows a dashboard view on a Chromecast device.
      showLovelaceView: ServiceFunction<
        object,
        T,
        {
          // Media player entity to show the dashboard view on.
          entity_id: string;
          // The URL path of the dashboard to show, defaults to lovelace if not specified. @example lovelace-cast
          dashboard_path?: string;
          // The URL path of the dashboard view to show. @example downstairs
          view_path: string;
        }
      >;
    };
    deviceTracker: {
      // Manually update the records of a seen legacy device tracker in the known_devices.yaml file.
      see: ServiceFunction<
        object,
        T,
        {
          // MAC address of the device. @example FF:FF:FF:FF:FF:FF
          mac?: string;
          // ID of the device (find the ID in `known_devices.yaml`). @example phonedave
          dev_id?: string;
          // Hostname of the device. @example Dave
          host_name?: string;
          // Name of the location where the device is located. The options are: `home`, `not_home`, or the name of the zone. @example home
          location_name?: string;
          // GPS coordinates where the device is located, specified by latitude and longitude (for example: [51.513845, -0.100539]). @example [51.509802, -0.086692]
          gps?: object;
          // Accuracy of the GPS coordinates. @constraints  number: min: 0, mode: box, unit_of_measurement: m
          gps_accuracy?: number;
          // Battery level of the device. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          battery?: number;
        }
      >;
    };
    todo: {
      // Adds a new to-do list item.
      addItem: ServiceFunction<
        object,
        T,
        {
          // The name that represents the to-do item. @example Submit income tax return
          item: string;
          // The date the to-do item is expected to be completed. @example 2023-11-17
          due_date?: string;
          // The date and time the to-do item is expected to be completed. @example 2023-11-17 13:30:00
          due_datetime?: string;
          // A more complete description of the to-do item than provided by the item name. @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // Updates an existing to-do list item based on its name.
      updateItem: ServiceFunction<
        object,
        T,
        {
          // The current name of the to-do item. @example Submit income tax return
          item: string;
          // The new name for the to-do item @example Something else
          rename?: string;
          // A status or confirmation of the to-do item. @example needs_action
          status?: "needs_action" | "completed";
          // The date the to-do item is expected to be completed. @example 2023-11-17
          due_date?: string;
          // The date and time the to-do item is expected to be completed. @example 2023-11-17 13:30:00
          due_datetime?: string;
          // A more complete description of the to-do item than provided by the item name. @example A more complete description of the to-do item than that provided by the summary.
          description?: string;
        }
      >;
      // Removes an existing to-do list item by its name.
      removeItem: ServiceFunction<
        object,
        T,
        {
          // The name for the to-do list item.
          item: string;
        }
      >;
      // Gets items on a to-do list.
      getItems: ServiceFunction<
        object,
        T,
        {
          // Only return to-do items with the specified statuses. Returns not completed actions by default. @example needs_action
          status?: "needs_action" | "completed";
        }
      >;
      // Removes all to-do list items that have been completed.
      removeCompletedItems: ServiceFunction<object, T, object>;
    };
    remote: {
      // Sends the turn off command.
      turnOff: ServiceFunction<object, T, object>;
      // Sends the turn on command.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Activity ID or activity name to be started. @example BedroomTV
          activity?: string;
        }
      >;
      // Sends the toggle command.
      toggle: ServiceFunction<object, T, object>;
      // Sends a command or a list of commands to a device.
      sendCommand: ServiceFunction<
        object,
        T,
        {
          // Device ID to send command to. @example 32756745
          device?: string;
          // A single command or a list of commands to send. @example Play
          command: object;
          // The number of times you want to repeat the commands. @constraints  number: min: 0, max: 255
          num_repeats?: number;
          // The time you want to wait in between repeated commands. @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds
          delay_secs?: number;
          // The time you want to have it held before the release is send. @constraints  number: min: 0, max: 60, step: 0.1, unit_of_measurement: seconds
          hold_secs?: number;
        }
      >;
      // Learns a command or a list of commands from a device.
      learnCommand: ServiceFunction<
        object,
        T,
        {
          // Device ID to learn command from. @example television
          device?: string;
          // A single command or a list of commands to learn. @example Turn on
          command?: object;
          // The type of command to be learned.
          command_type?: "ir" | "rf";
          // If code must be stored as an alternative. This is useful for discrete codes. Discrete codes are used for toggles that only perform one function. For example, a code to only turn a device on. If it is on already, sending the code won't change the state.
          alternative?: boolean;
          // Timeout for the command to be learned. @constraints  number: min: 0, max: 60, step: 5, unit_of_measurement: seconds
          timeout?: number;
        }
      >;
      // Deletes a command or a list of commands from the database.
      deleteCommand: ServiceFunction<
        object,
        T,
        {
          // Device from which commands will be deleted. @example television
          device?: string;
          // The single command or the list of commands to be deleted. @example Mute
          command: object;
        }
      >;
    };
    button: {
      // Press the button entity.
      press: ServiceFunction<object, T, object>;
    };
    climate: {
      // Turns climate device on.
      turnOn: ServiceFunction<object, T, object>;
      // Turns climate device off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles climate device, from on to off, or off to on.
      toggle: ServiceFunction<object, T, object>;
      // Sets HVAC operation mode.
      setHvacMode: ServiceFunction<
        object,
        T,
        {
          // HVAC operation mode.
          hvac_mode?:
            | "off"
            | "auto"
            | "cool"
            | "dry"
            | "fan_only"
            | "heat_cool"
            | "heat";
        }
      >;
      // Sets preset mode.
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          // Preset mode. @example away
          preset_mode: string;
        }
      >;
      // Turns auxiliary heater on/off.
      setAuxHeat: ServiceFunction<
        object,
        T,
        {
          // New value of auxiliary heater.
          aux_heat: boolean;
        }
      >;
      // Sets the temperature setpoint.
      setTemperature: ServiceFunction<
        object,
        T,
        {
          // The temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          temperature?: number;
          // The max temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_high?: number;
          // The min temperature setpoint. @constraints  number: min: 0, max: 250, step: 0.1, mode: box
          target_temp_low?: number;
          // HVAC operation mode.
          hvac_mode?:
            | "off"
            | "auto"
            | "cool"
            | "dry"
            | "fan_only"
            | "heat_cool"
            | "heat";
        }
      >;
      // Sets target humidity.
      setHumidity: ServiceFunction<
        object,
        T,
        {
          // Target humidity. @constraints  number: min: 30, max: 99, unit_of_measurement: %
          humidity: number;
        }
      >;
      // Sets fan operation mode.
      setFanMode: ServiceFunction<
        object,
        T,
        {
          // Fan operation mode. @example low
          fan_mode: string;
        }
      >;
      // Sets swing operation mode.
      setSwingMode: ServiceFunction<
        object,
        T,
        {
          // Swing operation mode. @example on
          swing_mode: string;
        }
      >;
      // Sets horizontal swing operation mode.
      setSwingHorizontalMode: ServiceFunction<
        object,
        T,
        {
          // Horizontal swing operation mode. @example on
          swing_horizontal_mode: string;
        }
      >;
    };
    cover: {
      // Opens a cover.
      openCover: ServiceFunction<object, T, object>;
      // Closes a cover.
      closeCover: ServiceFunction<object, T, object>;
      // Moves a cover to a specific position.
      setCoverPosition: ServiceFunction<
        object,
        T,
        {
          // Target position. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          position: number;
        }
      >;
      // Stops the cover movement.
      stopCover: ServiceFunction<object, T, object>;
      // Toggles a cover open/closed.
      toggle: ServiceFunction<object, T, object>;
      // Tilts a cover open.
      openCoverTilt: ServiceFunction<object, T, object>;
      // Tilts a cover to close.
      closeCoverTilt: ServiceFunction<object, T, object>;
      // Stops a tilting cover movement.
      stopCoverTilt: ServiceFunction<object, T, object>;
      // Moves a cover tilt to a specific position.
      setCoverTiltPosition: ServiceFunction<
        object,
        T,
        {
          // Target tilt positition. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          tilt_position: number;
        }
      >;
      // Toggles a cover tilt open/closed.
      toggleCoverTilt: ServiceFunction<object, T, object>;
    };
    text: {
      // Sets the value.
      setValue: ServiceFunction<
        object,
        T,
        {
          // Enter your text. @example Hello world!
          value: string;
        }
      >;
    };
    valve: {
      // Opens a valve.
      openValve: ServiceFunction<object, T, object>;
      // Closes a valve.
      closeValve: ServiceFunction<object, T, object>;
      // Moves a valve to a specific position.
      setValvePosition: ServiceFunction<
        object,
        T,
        {
          // Target position. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          position: number;
        }
      >;
      // Stops the valve movement.
      stopValve: ServiceFunction<object, T, object>;
      // Toggles a valve open/closed.
      toggle: ServiceFunction<object, T, object>;
    };
    watchman: {
      // Run the Watchman report
      report: ServiceFunction<
        object,
        T,
        {
          // Parse configuration files before generating the report. Usually, this is done automatically by Watchman, so this flag is typically not required. @example true
          parse_config?: boolean;
          //
          advanced_options?: object;
        }
      >;
    };
    fan: {
      // Turns fan on.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // Speed of the fan. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage?: number;
          // Preset fan mode. @example auto
          preset_mode?: string;
        }
      >;
      // Turns fan off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles a fan on/off.
      toggle: ServiceFunction<object, T, object>;
      // Increases the speed of a fan.
      increaseSpeed: ServiceFunction<
        object,
        T,
        {
          // Percentage step by which the speed should be increased. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage_step?: number;
        }
      >;
      // Decreases the speed of a fan.
      decreaseSpeed: ServiceFunction<
        object,
        T,
        {
          // Percentage step by which the speed should be decreased. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage_step?: number;
        }
      >;
      // Controls the oscillation of a fan.
      oscillate: ServiceFunction<
        object,
        T,
        {
          // Turns oscillation on/off.
          oscillating: boolean;
        }
      >;
      // Sets a fan's rotation direction.
      setDirection: ServiceFunction<
        object,
        T,
        {
          // Direction of the fan rotation.
          direction: "forward" | "reverse";
        }
      >;
      // Sets the speed of a fan.
      setPercentage: ServiceFunction<
        object,
        T,
        {
          // Speed of the fan. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          percentage: number;
        }
      >;
      // Sets preset fan mode.
      setPresetMode: ServiceFunction<
        object,
        T,
        {
          // Preset fan mode. @example auto
          preset_mode: string;
        }
      >;
    };
    humidifier: {
      // Turns the humidifier on.
      turnOn: ServiceFunction<object, T, object>;
      // Turns the humidifier off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles the humidifier on/off.
      toggle: ServiceFunction<object, T, object>;
      // Sets the humidifier operation mode.
      setMode: ServiceFunction<
        object,
        T,
        {
          // Operation mode. For example, 'normal', 'eco', or 'away'. For a list of possible values, refer to the integration documentation. @example away
          mode: string;
        }
      >;
      // Sets the target humidity.
      setHumidity: ServiceFunction<
        object,
        T,
        {
          // Target humidity. @constraints  number: min: 0, max: 100, unit_of_measurement: %
          humidity: number;
        }
      >;
    };
    lock: {
      // Unlocks a lock.
      unlock: ServiceFunction<
        object,
        T,
        {
          // Code used to unlock the lock. @example 1234
          code?: string;
        }
      >;
      // Locks a lock.
      lock: ServiceFunction<
        object,
        T,
        {
          // Code used to lock the lock. @example 1234
          code?: string;
        }
      >;
      // Opens a lock.
      open: ServiceFunction<
        object,
        T,
        {
          // Code used to open the lock. @example 1234
          code?: string;
        }
      >;
    };
    siren: {
      // Turns the siren on.
      turnOn: ServiceFunction<
        object,
        T,
        {
          // The tone to emit. When `available_tones` property is a map, either the key or the value can be used. Must be supported by the integration. @example fire
          tone?: string;
          // The volume. 0 is inaudible, 1 is the maximum volume. Must be supported by the integration. @example 0.5 @constraints  number: min: 0, max: 1, step: 0.05
          volume_level?: number;
          // Number of seconds the sound is played. Must be supported by the integration. @example 15
          duration?: string;
        }
      >;
      // Turns the siren off.
      turnOff: ServiceFunction<object, T, object>;
      // Toggles the siren on/off.
      toggle: ServiceFunction<object, T, object>;
    };
    googleHome: {
      // Delete an alarm from a Google Home device.
      deleteAlarm: ServiceFunction<
        object,
        T,
        {
          // Represents a Google Home device (sensor.xxxx_alarms). @example sensor.kitchen_alarms
          entity_id: string;
          // Skip refreshing Google Home devices after deleting an alarm. @example true
          skip_refresh?: boolean;
          // ID of an alarm (alarm/xxx). @example alarm/6ed06a56-8a58-c6e3-a7d4-03f92c9d8a51
          alarm_id: string;
        }
      >;
      // Delete a timer from a Google Home device.
      deleteTimer: ServiceFunction<
        object,
        T,
        {
          // Represents a Google Home device (sensor.xxxx_alarms). @example sensor.kitchen_timers
          entity_id: string;
          // Skip refreshing Google Home devices after deleting a timer. @example true
          skip_refresh?: boolean;
          // ID of a timer (timer/xxx). @example timer/6ed06a56-8a58-c6e3-a7d4-03f92c9d8a51
          timer_id: string;
        }
      >;
      // Reboot a Google Home device.
      rebootDevice: ServiceFunction<object, T, object>;
      // Refresh the status of all Google Home Devices.
      refreshDevices: ServiceFunction<object, T, object>;
    };
    weather: {
      // Retrieves the forecast from selected weather services.
      getForecasts: ServiceFunction<
        object,
        T,
        {
          // The scope of the weather forecast.
          type: "daily" | "hourly" | "twice_daily";
        }
      >;
    };
    switch: {
      // Turns a switch off.
      turnOff: ServiceFunction<object, T, object>;
      // Turns a switch on.
      turnOn: ServiceFunction<object, T, object>;
      // Toggles a switch on/off.
      toggle: ServiceFunction<object, T, object>;
    };
    adaptiveLighting: {
      // Applies the current Adaptive Lighting settings to lights.
      apply: ServiceFunction<
        object,
        T,
        {
          // The `entity_id` of the switch with the settings to apply. 📝
          entity_id?: string;
          // A light (or list of lights) to apply the settings to. 💡
          lights?: string;
          // Duration of transition when lights change, in seconds. 🕑 @example 10
          transition?: string;
          // Whether to adapt the brightness of the light. 🌞 @example true
          adapt_brightness?: boolean;
          // Whether to adapt the color on supporting lights. 🌈 @example true
          adapt_color?: boolean;
          // Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
          prefer_rgb_color?: boolean;
          // Whether to turn on lights that are currently off. 🔆
          turn_on_lights?: boolean;
        }
      >;
      // Mark whether a light is 'manually controlled'.
      setManualControl: ServiceFunction<
        object,
        T,
        {
          // The `entity_id` of the switch in which to (un)mark the light as being `manually controlled`. 📝
          entity_id?: string;
          // entity_id(s) of lights, if not specified, all lights in the switch are selected. 💡
          lights?: string;
          // Whether to add ('true') or remove ('false') the light from the 'manual_control' list. 🔒 @example true
          manual_control?: boolean;
        }
      >;
      // Change any settings you'd like in the switch. All options here are the same as in the config flow.
      changeSwitchSettings: ServiceFunction<
        object,
        T,
        {
          // Entity ID of the switch. 📝
          entity_id: string;
          // Sets the default values not specified in this service call. Options: 'current' (default, retains current values), 'factory' (resets to documented defaults), or 'configuration' (reverts to switch config defaults). ⚙️ @example current
          use_defaults?: "current" | "configuration" | "factory";
          // Show all options as attributes on the switch in Home Assistant when set to `true`. 📝
          include_config_in_attributes?: boolean;
          // Whether to turn on lights that are currently off. 🔆
          turn_on_lights?: boolean;
          // Duration of the first transition when lights turn from `off` to `on` in seconds. ⏲️ @example 1
          initial_transition?: string;
          // Duration of transition when 'sleep mode' is toggled in seconds. 😴 @example 1
          sleep_transition?: string;
          // Maximum brightness percentage. 💡 @example 100
          max_brightness?: string;
          // Coldest color temperature in Kelvin. ❄️ @example 5500
          max_color_temp?: string;
          // Minimum brightness percentage. 💡 @example 1
          min_brightness?: string;
          // Warmest color temperature in Kelvin. 🔥 @example 2000
          min_color_temp?: string;
          // Adapt lights only when they are turned on (`true`) or keep adapting them (`false`). 🔄
          only_once?: boolean;
          // Whether to prefer RGB color adjustment over light color temperature when possible. 🌈
          prefer_rgb_color?: boolean;
          // Use separate `light.turn_on` calls for color and brightness, needed for some light types. 🔀
          separate_turn_on_commands?: boolean;
          // Delay (ms) between `separate_turn_on_commands` for lights that don't support simultaneous brightness and color setting. ⏲️
          send_split_delay?: boolean;
          // Brightness percentage of lights in sleep mode. 😴 @example 1
          sleep_brightness?: string;
          // Use either `'rgb_color'` or `'color_temp'` in sleep mode. 🌙 @example color_temp
          sleep_rgb_or_color_temp?: "rgb_color" | "color_temp";
          // RGB color in sleep mode (used when `sleep_rgb_or_color_temp` is 'rgb_color'). 🌈
          sleep_rgb_color?: any;
          // Color temperature in sleep mode (used when `sleep_rgb_or_color_temp` is `color_temp`) in Kelvin. 😴 @example 1000
          sleep_color_temp?: string;
          // Adjust sunrise time with a positive or negative offset in seconds. ⏰ @constraints  number: min: 0, max: 86300
          sunrise_offset?: number;
          // Set a fixed time (HH:MM:SS) for sunrise. 🌅
          sunrise_time?: string;
          // Adjust sunset time with a positive or negative offset in seconds. ⏰ @constraints  number: min: 0, max: 86300
          sunset_offset?: number;
          // Set a fixed time (HH:MM:SS) for sunset. 🌇
          sunset_time?: string;
          // Set the latest virtual sunrise time (HH:MM:SS), allowing for earlier sunrises. 🌅
          max_sunrise_time?: string;
          // Set the earliest virtual sunset time (HH:MM:SS), allowing for later sunsets. 🌇
          min_sunset_time?: string;
          // Disable Adaptive Lighting if another source calls `light.turn_on` while lights are on and being adapted. Note that this calls `homeassistant.update_entity` every `interval`! 🔒 @example true
          take_over_control?: boolean;
          // Detects and halts adaptations for non-`light.turn_on` state changes. Needs `take_over_control` enabled. 🕵️ Caution: ⚠️ Some lights might falsely indicate an 'on' state, which could result in lights turning on unexpectedly. Disable this feature if you encounter such issues.
          detect_non_ha_changes?: boolean;
          // Duration of transition when lights change, in seconds. 🕑 @example 45
          transition?: string;
          // Wait time (seconds) between light turn on and Adaptive Lighting applying changes. Might help to avoid flickering. ⏲️
          adapt_delay?: string;
          // Automatically reset the manual control after a number of seconds. Set to 0 to disable. ⏲️
          autoreset_control_seconds?: string;
        }
      >;
    };
    image: {
      // Takes a snapshot from an image.
      snapshot: ServiceFunction<
        object,
        T,
        {
          // Template of a filename. Variable available is `entity_id`. @example /tmp/image_snapshot.jpg
          filename: string;
        }
      >;
    };
    time: {
      // Sets the time.
      setValue: ServiceFunction<
        object,
        T,
        {
          // The time to set. @example 22:15
          time: string;
        }
      >;
    };
    vacuum: {
      // Starts or resumes the cleaning task.
      start: ServiceFunction<object, T, object>;
      // Pauses the cleaning task.
      pause: ServiceFunction<object, T, object>;
      // Tells the vacuum cleaner to return to its dock.
      returnToBase: ServiceFunction<object, T, object>;
      // Tells the vacuum cleaner to do a spot clean-up.
      cleanSpot: ServiceFunction<object, T, object>;
      // Locates the vacuum cleaner robot.
      locate: ServiceFunction<object, T, object>;
      // Stops the current cleaning task.
      stop: ServiceFunction<object, T, object>;
      // Sets the fan speed of the vacuum cleaner.
      setFanSpeed: ServiceFunction<
        object,
        T,
        {
          // Fan speed. The value depends on the integration. Some integrations have speed steps, like 'medium'. Some use a percentage, between 0 and 100. @example low
          fan_speed: string;
        }
      >;
      // Sends a command to the vacuum cleaner.
      sendCommand: ServiceFunction<
        object,
        T,
        {
          // Command to execute. The commands are integration-specific. @example set_dnd_timer
          command: string;
          // Parameters for the command. The parameters are integration-specific. @example { 'key': 'value' }
          params?: object;
        }
      >;
    };
    roborock: {
      // Retrieves the map and room information of your device.
      getMaps: ServiceFunction<object, T, object>;
      // Retrieves the current position of the vacuum.
      getVacuumCurrentPosition: ServiceFunction<object, T, object>;
      // Sends the vacuum to a specific position.
      setVacuumGotoPosition: ServiceFunction<
        object,
        T,
        {
          // Coordinates are relative to the dock. x=25500,y=25500 is the dock position. @example 27500
          x: string;
          // Coordinates are relative to the dock. x=25500,y=25500 is the dock position. @example 32000
          y: string;
        }
      >;
    };
    google: {
      // Adds a new calendar event.
      addEvent: ServiceFunction<
        object,
        T,
        {
          // The id of the calendar you want. @example Your email
          calendar_id: string;
          // Acts as the title of the event. @example Bowling
          summary: string;
          // The description of the event. Optional. @example Birthday bowling
          description?: string;
          // The date and time the event should start. @example 2019-03-22 20:00:00
          start_date_time?: string;
          // The date and time the event should end. @example 2019-03-22 22:00:00
          end_date_time?: string;
          // The date the whole day event should start. @example 2019-03-10
          start_date?: string;
          // The date the whole day event should end. @example 2019-03-11
          end_date?: string;
          // Days or weeks that you want to create the event in. @example 'days': 2 or 'weeks': 2
          in?: object;
        }
      >;
      // Adds a new calendar event.
      createEvent: ServiceFunction<
        object,
        T,
        {
          // Acts as the title of the event. @example Bowling
          summary: string;
          // The description of the event. Optional. @example Birthday bowling
          description?: string;
          // The date and time the event should start. @example 2022-03-22 20:00:00
          start_date_time?: string;
          // The date and time the event should end. @example 2022-03-22 22:00:00
          end_date_time?: string;
          // The date the whole day event should start. @example 2022-03-10
          start_date?: string;
          // The date the whole day event should end. @example 2022-03-11
          end_date?: string;
          // Days or weeks that you want to create the event in. @example 'days': 2 or 'weeks': 2
          in?: object;
          // The location of the event. Optional. @example Conference Room - F123, Bldg. 002
          location?: string;
        }
      >;
    };
    script: {
      //
      blinkandeLampor: ServiceFunction<object, T, object>;
      //
      alarmUtlost: ServiceFunction<object, T, object>;
      //
      tandAllaLampor: ServiceFunction<object, T, object>;
      //
      musikHogtalareEnergi: ServiceFunction<object, T, object>;
      //
      musikHogtalareEdm: ServiceFunction<object, T, object>;
      //
      qrWifiGast: ServiceFunction<object, T, object>;
      //
      qrWifiIot: ServiceFunction<object, T, object>;
      //
      qrWifiMain: ServiceFunction<object, T, object>;
      //
      luftrenareSleepLage: ServiceFunction<object, T, object>;
      //
      musikHogtalareMys: ServiceFunction<object, T, object>;
      //
      musikHogtalareStada: ServiceFunction<object, T, object>;
      //
      stangAvAllt: ServiceFunction<object, T, object>;
      //
      sunrise: ServiceFunction<object, T, object>;
      //
      lamnaHem: ServiceFunction<object, T, object>;
      //
      slackAlltUtomVardagsrum: ServiceFunction<object, T, object>;
      //
      turnOnFlux: ServiceFunction<
        object,
        T,
        {
          // The light entity to control @example light.hall
          light_entity?: object;
        }
      >;
      //
      alarmNotis: ServiceFunction<object, T, object>;
      //
      alarmSiren: ServiceFunction<object, T, object>;
      //
      setAndroidAlarm: ServiceFunction<object, T, object>;
      //
      todoUppgift: ServiceFunction<
        object,
        T,
        {
          // Title of the task. @example Task title
          Title?: object;
          // Additional note for the task. @example Task note
          anteckning?: object;
          // Due date for the task. @example 2023-05-30
          datum?: object;
          // Reminder date and time. @example 2023-05-29T09:00:00.000Z
          reminder?: object;
        }
      >;
      //
      godnatt: ServiceFunction<object, T, object>;
      //
      volymHogtalare015: ServiceFunction<object, T, object>;
      //
      hittaWilmisen: ServiceFunction<object, T, object>;
      //
      hittaSamsungS21: ServiceFunction<object, T, object>;
      //
      dammsugaSovrum: ServiceFunction<object, T, object>;
      //
      dammsugaBadrum: ServiceFunction<object, T, object>;
      //
      dammsugaKontor: ServiceFunction<object, T, object>;
      //
      dammsugaHall: ServiceFunction<object, T, object>;
      //
      dammsugaVardagsrum: ServiceFunction<object, T, object>;
      //
      dammsugaGarderob: ServiceFunction<object, T, object>;
      //
      startaDammsugare2Timmar: ServiceFunction<object, T, object>;
      //
      startaDammsugare4Timmar: ServiceFunction<object, T, object>;
      //
      timerTvatt: ServiceFunction<object, T, object>;
      //
      haShowSidebar: ServiceFunction<object, T, object>;
      //
      musikHogtalareMys2: ServiceFunction<object, T, object>;
      //
      musikHogtalareMys3: ServiceFunction<object, T, object>;
      //
      mysigMusikSlumpmassig: ServiceFunction<object, T, object>;
      //
      musikHallMys: ServiceFunction<object, T, object>;
      //
      musikHallMys2: ServiceFunction<object, T, object>;
      //
      musikHallMys3: ServiceFunction<object, T, object>;
      //
      hogtalareEnergiSlumpmassig: ServiceFunction<object, T, object>;
      //
      musikHogtalareEnergi2: ServiceFunction<object, T, object>;
      //
      musikHogtalareEnergi3: ServiceFunction<object, T, object>;
      //
      musikHallEnergi: ServiceFunction<object, T, object>;
      //
      musikHallEnergi2: ServiceFunction<object, T, object>;
      //
      musikHallEnergi3: ServiceFunction<object, T, object>;
      //
      update: ServiceFunction<object, T, object>;
      //
      sendTtsGoogleHomeResume: ServiceFunction<object, T, object>;
      //
      textAlert: ServiceFunction<
        object,
        T,
        {
          // Vem ska få meddelandet @example benjamin
          who?: object;
          // Titel på meddelandet @example Varning
          title?: object;
          // Innehåll i meddelandet @example Detta är en varning
          message?: object;
        }
      >;
      //
      textAlertImage: ServiceFunction<
        object,
        T,
        {
          // Vem ska få meddelandet @example benjamin
          who?: object;
          // Titel på meddelandet @example Varning
          title?: object;
          // Innehåll i meddelandet @example Detta är en varning
          message?: object;
          // URL till bilden @example http://example.com/image.jpg
          url?: object;
          // Innehållstyp för bilden @example image/jpeg
          content_type?: object;
        }
      >;
      //
      morgonMatPaminnelse: ServiceFunction<object, T, object>;
      //
      spelaUppTv: ServiceFunction<
        object,
        T,
        {
          // Vilket rum eller media_player @example vardagsrum
          who?: object;
        }
      >;
      //
      musikHogtalareMys4: ServiceFunction<object, T, object>;
      //
      jarvisGlomtDorr: ServiceFunction<object, T, object>;
      //
      startaTvatt: ServiceFunction<object, T, object>;
      //
      dammsugaKok: ServiceFunction<object, T, object>;
      //
      dammsugaFragaAndroid: ServiceFunction<object, T, object>;
      //
      dammsugaFragaIos: ServiceFunction<object, T, object>;
      //
      jarvisMatladaPaminnelse: ServiceFunction<object, T, object>;
      //
      jarvisValkommenHem: ServiceFunction<object, T, object>;
      //
      jarvisCastarTv: ServiceFunction<object, T, object>;
      //
      jarvisStangAvTv: ServiceFunction<object, T, object>;
      //
      jarvisGodnatt: ServiceFunction<object, T, object>;
      //
      jarvisDockarBertil: ServiceFunction<object, T, object>;
      //
      castUtanLjudDel1: ServiceFunction<object, T, object>;
      //
      adaptiveLightingSovlagePa: ServiceFunction<object, T, object>;
      //
      adaptiveLightingSovlageAv: ServiceFunction<object, T, object>;
      //
      castUtanLjudDel2: ServiceFunction<object, T, object>;
      //
      stangAvTvVardagsrum: ServiceFunction<object, T, object>;
      //
      volymHogtalare03: ServiceFunction<object, T, object>;
      //
      morgon: ServiceFunction<object, T, object>;
      //
      startaJellyfin: ServiceFunction<object, T, object>;
      //
      lampaPaSnabbt: ServiceFunction<object, T, object>;
      //
      slackSovrum: ServiceFunction<object, T, object>;
      //
      volymHogtalare042: ServiceFunction<object, T, object>;
      //
      speechEngine: ServiceFunction<object, T, object>;
      //
      announcement: ServiceFunction<object, T, object>;
      //
      briefing: ServiceFunction<object, T, object>;
      //
      dailyBriefing: ServiceFunction<object, T, object>;
      //
      jarvisAlreadyDone: ServiceFunction<object, T, object>;
      //
      jarvisResponse: ServiceFunction<object, T, object>;
      //
      housePartyProtocolOn: ServiceFunction<object, T, object>;
      //
      housePartyProtocolOff: ServiceFunction<object, T, object>;
      //
      googleInterjection: ServiceFunction<object, T, object>;
      //
      jarvisSaidWhat: ServiceFunction<object, T, object>;
      // Script to send a TTS with picture and text to a player with screen
      googleHomeTtsScreen: ServiceFunction<object, T, object>;
      // Reloads all the available scripts.
      reload: ServiceFunction<object, T, object>;
      // Runs the sequence of actions defined in a script.
      turnOn: ServiceFunction<object, T, object>;
      // Stops a running script.
      turnOff: ServiceFunction<object, T, object>;
      // Starts a script if it isn't running, stops it otherwise.
      toggle: ServiceFunction<object, T, object>;
    };
    alarmControlPanel: {
      // Disarms the alarm.
      alarmDisarm: ServiceFunction<
        object,
        T,
        {
          // Code to disarm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm in the home mode.
      alarmArmHome: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm in the away mode.
      alarmArmAway: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm in the night mode.
      alarmArmNight: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm in the vacation mode.
      alarmArmVacation: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Arms the alarm while allowing to bypass a custom area.
      alarmArmCustomBypass: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
      // Triggers the alarm manually.
      alarmTrigger: ServiceFunction<
        object,
        T,
        {
          // Code to arm the alarm. @example 1234
          code?: string;
        }
      >;
    };
    alarmo: {
      //
      arm: ServiceFunction<
        object,
        T,
        {
          //  @example alarm_control_panel.alarm
          entity_id: string;
          //  @example 1234
          code?: string;
          //  @example away
          mode?: "away" | "night" | "home" | "vacation" | "custom";
          //
          skip_delay?: boolean;
          //
          force?: boolean;
        }
      >;
      //
      disarm: ServiceFunction<
        object,
        T,
        {
          //  @example alarm_control_panel.alarm
          entity_id: string;
          //  @example 1234
          code?: string;
        }
      >;
      //
      enableUser: ServiceFunction<
        object,
        T,
        {
          //  @example Frank
          name: string;
        }
      >;
      //
      disableUser: ServiceFunction<
        object,
        T,
        {
          //  @example Frank
          name: string;
        }
      >;
    };
    powercalc: {
      // Batch change configuration of all Powercalc config entries
      changeGuiConfig: ServiceFunction<
        object,
        T,
        {
          // The field you'd like to change
          field:
            | "create_energy_sensor"
            | "create_utility_meters"
            | "ignore_unavailable_state"
            | "energy_integration_method";
          // The value to set.
          value: string;
        }
      >;
      // Update the profile library and reinitialize discovery
      updateLibrary: ServiceFunction<object, T, object>;
      // Reload Powercalc configuration and entities
      reload: ServiceFunction<object, T, object>;
      // Reset an energy sensor to zero kWh.
      resetEnergy: ServiceFunction<object, T, object>;
      // Calibrates a utility meter sensor.
      calibrateUtilityMeter: ServiceFunction<
        object,
        T,
        {
          // The value to set. @example 100
          value: string;
        }
      >;
      // Sets the energy sensor to a given kWh value.
      calibrateEnergy: ServiceFunction<
        object,
        T,
        {
          // The value to set. @example 100
          value: string;
        }
      >;
      // Increases the sensor with a given amount.
      increaseDailyEnergy: ServiceFunction<
        object,
        T,
        {
          // Amount to add to the sensor. @example 100
          value: string;
        }
      >;
      // Start execution of a playbook.
      activatePlaybook: ServiceFunction<
        object,
        T,
        {
          // Playbook identifier. @example program1
          playbook_id: string;
        }
      >;
      // Stop currently active playbook.
      stopPlaybook: ServiceFunction<object, T, object>;
      // Get current running playbook
      getActivePlaybook: ServiceFunction<object, T, object>;
      // Some profiles in the library has different sub profiles. This service allows you to switch to another one.
      switchSubProfile: ServiceFunction<
        object,
        T,
        {
          // Define one of the possible sub profiles @example night_vision
          profile: string;
        }
      >;
      // Retrieve all entity id's of a group energy or power sensor
      getGroupEntities: ServiceFunction<object, T, object>;
    };
    spotcast: {
      // Starts spotify playback on chromecast devices
      start: ServiceFunction<
        object,
        T,
        {
          // The friendly name of the chromecast or spotify connect device. First checks spotify device list for name (not used together with entity_id and spotify_device_id). @example Livingroom
          device_name?: string;
          // Advanced users only. The spotify device id (not used together with entity_id or device_name). @example 4363634563457346xcyvydgf3qwa
          spotify_device_id?: string;
          // The entity_id of the chromecast mediaplayer. Friendly name MUST match the spotify connect device name (not used together with device_name and spotify_device_id). @example media_player.vardagsrum
          entity_id?: string;
          // Supported Spotify URI as string. None or empty uri will transfer the current/last playback (see parameter force_playback). @example spotify:playlist:37i9dQZF1DX3yvAYDslnv8
          uri?: string;
          // A category to fetch playlist from. See https://developer.spotify.com/console/get-browse-categories/ for a list of categories
          category?: string;
          // Country code to use with category. See https://spotipy.readthedocs.io/en/2.19.0/#spotipy.client.Spotify.country_codes for list of available codes
          country?: string;
          // Limit of playlist to fetch in a given category. Default 20 @constraints  number: mode: box, step: 1, min: 0, max: 50
          limit?: number;
          // Filters search results for the provided album name. Don't include this if you don't want an album. @example The Dark Side of the Moon
          album_name?: string;
          // Filters search results for the provided track name. Don't include this if you don't want a particular track. @example Money
          track_name?: string;
          // Filters search results for the provided playlist name. Don't include this if you don't want a playlist. @example Ultimate pink floyd playlist
          playlist_name?: string;
          // Filters search results for the provided podcast show name. Don't include this if you don't want a podcast. @example Hollywood Handbook
          show_name?: string;
          // Filters search results for the provided podcast episode name. Don't include this if you don't want a podcast. @example Sarah Sherman, Our Close Friend
          episode_name?: string;
          // Filters search results by genre of music @example post punk
          genre_name?: string;
          // Filters search results for the provided audiobook name. Don't include this if you don't want an audiobook. @example Ulysses
          audiobook_name?: string;
          // This will filter search results to match the provided artist name. Don't include this if searching for a playlist or genre. Do include the author's name if searching for audiobooks. @example pink floyd
          artist_name?: string;
          // Optionally starts Spotify using an alternative account specified in config. @example my_wifes
          account?: string;
          // In case of transfering playback: If true starts playing the user's last playback even if nothing is currently playing. @example true
          force_playback?: boolean;
          // Starts the playback at a random position in the playlist or album. @example true
          random_song?: boolean;
          // Set repeat mode for playback. @example track
          repeat?: "track" | "context" | "off";
          // Set shuffle mode for playback. @example true
          shuffle?: boolean;
          // Set offset mode for playback. 0 is the first song. @example 1 @constraints  number: mode: box, step: 1, min: 0, max: 999999
          offset?: number;
          // Start position of the track in seconds @example 1 @constraints  number: mode: box, step: 1, min: 0, max: 999999
          start_position?: number;
          // Set the volume for playback in percentage. @example 50 @constraints  number: mode: slider, step: 1, min: 0, max: 100
          start_volume?: number;
          // Set to ignore or not already played episodes in a podcast playlist @example true
          ignore_fully_played?: boolean;
        }
      >;
    };
    automation: {
      // Triggers the actions of an automation.
      trigger: ServiceFunction<
        object,
        T,
        {
          // Defines whether or not the conditions will be skipped.
          skip_condition?: boolean;
        }
      >;
      // Toggles (enable / disable) an automation.
      toggle: ServiceFunction<object, T, object>;
      // Enables an automation.
      turnOn: ServiceFunction<object, T, object>;
      // Disables an automation.
      turnOff: ServiceFunction<
        object,
        T,
        {
          // Stops currently running actions.
          stop_actions?: boolean;
        }
      >;
      // Reloads the automation configuration.
      reload: ServiceFunction<object, T, object>;
    };
    repairs: {
      // Removes a manually created Home Assistant repairs issue. This action can only remove issues created with the `repairs_create` action.
      remove: ServiceFunction<
        object,
        T,
        {
          // The issue ID to remove.
          issue_id: string;
        }
      >;
      // Unignore all issues currently raised in Home Assistant Repairs.
      unignoreAll: ServiceFunction<object, T, object>;
      // Ignore all issues currently raised in Home Assistant Repairs.
      ignoreAll: ServiceFunction<object, T, object>;
      // Manually create and raise a issue in Home Assistant repairs.
      create: ServiceFunction<
        object,
        T,
        {
          // The title of the issue.
          title: string;
          // The description of the issue. Supports Markdown.
          description: string;
          // The issue can have an identifier, which allows you to cancel it later with that ID if needed. It also prevent duplicate issues to be created. If not provided, a random ID will be generated.
          issue_id?: string;
          // This field can be used to set the domain of the issue. For example, by default (if not set), it will use 'spook'. This causes Spook to be shown in the logo/image of the issue. If you set it to 'homeassistant', the Home Assistant logo will be used, or use 'hue', 'zwave_js', 'mqtt', etc. to use the logo of that integration.
          domain?: string;
          // The severity of the issue. This will be used to determine the priority of the issue. If not set, 'warning' will be used
          severity?: "warning" | "error" | "critical";
          // If the issue should be persistent, which means it will survive restarts of Home Assistant. By default, issues are not persistent.
          persistent?: boolean;
        }
      >;
    };
    blueprint: {
      // Import a blueprint.
      import: ServiceFunction<
        object,
        T,
        {
          // The URL to import the blueprint from.
          url: string;
        }
      >;
    };
    spook: {
      // Performing this action will randomly fail.
      randomFail: ServiceFunction<object, T, object>;
      // Calling this action spooks Home Assistant. Performing this action will always fail.
      boo: ServiceFunction<object, T, object>;
    };
  }
  export interface CustomEntityNameContainer {
    names:
      | "person.benjamin"
      | "person.wilma"
      | "update.home_assistant_supervisor_update"
      | "update.home_assistant_core_update"
      | "update.file_editor_update"
      | "update.mosquitto_broker_update"
      | "update.rclone_backup_update"
      | "update.samba_share_update"
      | "update.z_wave_js_update"
      | "update.zigbee2mqtt_update"
      | "update.terminal_ssh_update"
      | "update.zabbix_agent2_update"
      | "update.timescaledb_update"
      | "update.pgadmin4_update"
      | "update.grocy_update"
      | "update.music_assistant_update"
      | "update.openwakeword_update"
      | "update.whisper_update"
      | "update.piper_update"
      | "update.snowboy_update"
      | "update.snapcast_server_update"
      | "update.studio_code_server_update"
      | "update.baby_buddy_update"
      | "update.home_assistant_operating_system_update"
      | "binary_sensor.mosquitto_broker_kor"
      | "binary_sensor.zigbee2mqtt_running"
      | "binary_sensor.enhet_ansluten"
      | "binary_sensor.is_anyone_home"
      | "binary_sensor.sover_2"
      | "binary_sensor.wilma_laddar_2"
      | "binary_sensor.samsung_laddar"
      | "binary_sensor.telefoner_laddar_2"
      | "binary_sensor.motion_livingroom"
      | "binary_sensor.motion_kitchen"
      | "binary_sensor.motion_office"
      | "binary_sensor.motion_bedroom"
      | "binary_sensor.motion_wardrobe"
      | "binary_sensor.motion_hallway"
      | "binary_sensor.motion_bathroom"
      | "sensor.tts_greeting"
      | "sensor.tts_confirmation"
      | "sensor.tts_interuption"
      | "sensor.tts_issue_announcement"
      | "sensor.tts_time_is"
      | "sensor.template_udm_cpu"
      | "sensor.template_udm_cpu_temp"
      | "sensor.template_udm_mem"
      | "sensor.template_udm_disk"
      | "sensor.template_udm_uptime"
      | "sensor.template_udm_version"
      | "sensor.template_hass_next_release"
      | "sensor.template_updates"
      | "sensor.volym"
      | "sensor.benjamin_rum"
      | "sensor.rum_kalla"
      | "sensor.volym_sync"
      | "binary_sensor.remote_ui"
      | "stt.home_assistant_cloud"
      | "tts.home_assistant_cloud"
      | "binary_sensor.night"
      | "sensor.time"
      | "sensor.date"
      | "sensor.date_time"
      | "binary_sensor.day"
      | "binary_sensor.morning"
      | "binary_sensor.midday"
      | "binary_sensor.evening"
      | "binary_sensor.quiet_time"
      | "sensor.happy_wifi_happy_lifi"
      | "sensor.bertil_avbrott"
      | "sensor.room_audio"
      | "sensor.benjamin_room"
      | "sensor.wilma_room"
      | "sensor.today_is_day"
      | "sensor.vardagsrum_narvaro"
      | "sensor.kontor_narvaro"
      | "sensor.sovrum_narvaro"
      | "sensor.kok_narvaro"
      | "sensor.cpe_alltid_pa"
      | "sensor.kyl_alltid_pa"
      | "sensor.pris_manad_el_total"
      | "sensor.pris_idag"
      | "sensor.template_vacuum_mainbrush"
      | "sensor.template_vacuum_filter"
      | "sensor.template_vacuum_sensors"
      | "binary_sensor.speaker_down_alert_active"
      | "binary_sensor.sensors_down_alert_active"
      | "binary_sensor.lights_down_alert_active"
      | "binary_sensor.benjamin_home"
      | "binary_sensor.wilma_home"
      | "binary_sensor.wilmisen_wifi_hemma"
      | "binary_sensor.helg"
      | "binary_sensor.template_udm_internet"
      | "conversation.home_assistant"
      | "light.flux_dum"
      | "scene.sovrum_smink"
      | "scene.film_mys"
      | "scene.jobba_hemma"
      | "scene.julstjarna"
      | "scene.sovrum_slackt"
      | "scene.allt_slackt"
      | "scene.vardagsrum_tant"
      | "scene.kok_tant"
      | "group.family"
      | "group.people"
      | "group.benjamin"
      | "group.wilma"
      | "group.arriving"
      | "group.alla_lampor"
      | "group.occupancy"
      | "group.occupancy_night"
      | "group.speakers"
      | "group.audio_devices"
      | "light.sanglampor"
      | "binary_sensor.rorelse_hemma"
      | "binary_sensor.sensors"
      | "media_player.hogtalare_2"
      | "light.alla_lampor"
      | "light.sovrum_helper"
      | "alert.speakers_alert_active"
      | "alert.post_info_alert_active"
      | "zone.wilma_jobb"
      | "zone.jobb_benjamin"
      | "zone.harplinge"
      | "zone.mma"
      | "zone.hassleholm"
      | "zone.torekov"
      | "zone.maxi_hogskolan"
      | "zone.bjarnum"
      | "input_number.flux_dum_brightness"
      | "input_number.flux_dum_color_red"
      | "input_number.flux_dum_color_green"
      | "input_number.flux_dum_tempature"
      | "input_select.trash_pickup"
      | "input_select.recycle_pickup"
      | "input_select.spotify_source"
      | "input_select.spotify_playlist"
      | "input_boolean.speakers_down_notify"
      | "input_boolean.sensors_down_notify"
      | "input_boolean.lights_down_notify"
      | "input_boolean.freeze_warning"
      | "input_boolean.flux_dum"
      | "input_boolean.xy_dum"
      | "input_boolean.welcome_greeting"
      | "input_boolean.benjamin_heading_home"
      | "input_boolean.wilma_heading_home"
      | "input_boolean.benjamin_traffic_alerts"
      | "input_boolean.benjamin_traffic_alert_home"
      | "input_boolean.wilma_travel_monitor"
      | "input_boolean.benjamin_travel_monitor"
      | "input_boolean.weather_reports"
      | "input_boolean.traffic_reports"
      | "input_boolean.sun_reports"
      | "input_boolean.new_ha_announcement"
      | "input_boolean.showing_now"
      | "input_boolean.shuffle_spotify"
      | "input_boolean.good_morning_report"
      | "input_boolean.master_bedroom_alarm"
      | "timer.reset_switch"
      | "timer.kok"
      | "timer.sovrum_dag"
      | "timer.sovrum_natt"
      | "timer.smink_flux"
      | "timer.godnatt"
      | "timer.platttang_tid"
      | "timer.hall"
      | "timer.vardagsrum"
      | "timer.kontor"
      | "timer.sovrum_timer"
      | "timer.badrum_timer"
      | "timer.garderob"
      | "timer.vattenskal"
      | "sensor.replay_kitchen_lights"
      | "sensor.replay_bedroom_lights"
      | "sensor.replay_hallway_lights"
      | "sensor.replay_office_lights"
      | "sensor.replay_living_room_lights"
      | "zone.home"
      | "input_number.roborock_room_enum_sovrum"
      | "input_number.roborock_room_enum_kok_2"
      | "input_number.roborock_room_enum_badrum"
      | "input_number.roborock_room_enum_hall"
      | "input_number.roborock_room_enum_vardagsrum"
      | "input_number.roborock_room_enum_garderob"
      | "input_number.roborock_room_enum_kontor"
      | "input_number.tts_volume"
      | "input_number.tts_high_volume"
      | "input_select.default_dashboard"
      | "input_boolean.minimalist_dropdown"
      | "input_boolean.godnatt"
      | "input_boolean.i_sangen"
      | "input_boolean.luftrenare_sleep"
      | "input_boolean.dimmer_pa"
      | "input_boolean.post"
      | "input_boolean.film_mys"
      | "input_boolean.musik_helg"
      | "input_boolean.tom_soporna"
      | "input_boolean.ater_i_koket"
      | "input_boolean.semester"
      | "input_boolean.fridge_always_on"
      | "input_boolean.medicin_wilma"
      | "input_boolean.medicin_benjamin"
      | "input_boolean.semesterresa"
      | "input_boolean.kok_lampor_pa"
      | "input_boolean.input_boolean_audible_notifications"
      | "input_boolean.lights_out"
      | "input_boolean.tvattmaskin"
      | "input_boolean.kiosk_mode"
      | "input_boolean.default_dashboard"
      | "sensor.hass_release_notes"
      | "sensor.hass_release_notes_beta"
      | "sensor.mealie_todays_meal"
      | "sensor.mealie_todays_meal_id"
      | "sensor.nordpool"
      | "light.lampor_badrum"
      | "light.vardagsrum_lampa"
      | "input_text.kontroll_senaste_kommando"
      | "input_text.benjamin_room"
      | "input_text.git_answer"
      | "sun.sun"
      | "sensor.sun_next_dawn"
      | "sensor.sun_next_dusk"
      | "sensor.sun_next_midnight"
      | "sensor.sun_next_noon"
      | "sensor.sun_next_rising"
      | "sensor.sun_next_setting"
      | "input_datetime.last_time_home_benjamin"
      | "input_datetime.last_time_home_wilma"
      | "input_datetime.senast_damsugat"
      | "input_datetime.senast_damsugat_2"
      | "input_datetime.tvatt"
      | "sensor.luftrenare_partiklar"
      | "sensor.luftrenare_filter_liv"
      | "select.luftrenare_lage"
      | "select.luftrenare_hastighet"
      | "select.luftrenare_countdown"
      | "media_player.tv_vardagsrum"
      | "remote.tv_vardagsrum"
      | "sensor.uptime"
      | "sensor.all_uppskattad_anvandning_energy_cost"
      | "sensor.backup_backup_manager_state"
      | "sensor.backup_next_scheduled_automatic_backup"
      | "sensor.backup_last_successful_automatic_backup"
      | "sensor.postnord_delivery_30231"
      | "sensor.citymail_delivery_30231"
      | "sensor.mail_delivery_30231"
      | "binary_sensor.galaxy_watch4_bthm_is_charging"
      | "device_tracker.galaxy_watch4_bthm"
      | "sensor.galaxy_watch4_bthm_battery_level"
      | "sensor.galaxy_watch4_bthm_battery_state"
      | "sensor.galaxy_watch4_bthm_charger_type"
      | "sensor.galaxy_watch4_bthm_battery_health"
      | "sensor.galaxy_watch4_bthm_battery_temperature"
      | "sensor.galaxy_watch4_bthm_battery_power"
      | "binary_sensor.quest_app_inactive"
      | "binary_sensor.quest_headphones"
      | "binary_sensor.quest_mic_muted"
      | "binary_sensor.quest_speakerphone"
      | "binary_sensor.quest_music_active"
      | "binary_sensor.quest_is_charging"
      | "binary_sensor.quest_work_profile"
      | "binary_sensor.quest_device_locked"
      | "binary_sensor.quest_device_secure"
      | "binary_sensor.quest_keyguard_locked"
      | "binary_sensor.quest_keyguard_secure"
      | "binary_sensor.quest_interactive"
      | "binary_sensor.quest_doze_mode"
      | "binary_sensor.quest_power_save"
      | "device_tracker.quest"
      | "sensor.quest_os_version"
      | "sensor.quest_security_patch"
      | "sensor.quest_current_version"
      | "sensor.quest_app_rx_gb"
      | "sensor.quest_app_tx_gb"
      | "sensor.quest_app_memory"
      | "sensor.quest_app_standby_bucket"
      | "sensor.quest_app_importance"
      | "sensor.quest_ringer_mode"
      | "sensor.quest_audio_mode"
      | "sensor.quest_volume_level_notification"
      | "sensor.quest_volume_level_system"
      | "sensor.quest_volume_level_dtmf"
      | "sensor.quest_battery_level"
      | "sensor.quest_battery_state"
      | "sensor.quest_charger_type"
      | "sensor.quest_battery_health"
      | "sensor.quest_battery_temperature"
      | "sensor.quest_battery_power"
      | "sensor.quest_last_reboot"
      | "sensor.quest_public_ip_address"
      | "sensor.quest_network_type"
      | "sensor.quest_next_alarm"
      | "sensor.quest_internal_storage"
      | "sensor.quest_external_storage"
      | "sensor.quest_total_rx_gb"
      | "sensor.quest_total_tx_gb"
      | "binary_sensor.samsung_s21_headphones"
      | "binary_sensor.samsung_s21_is_charging"
      | "binary_sensor.samsung_s21_high_accuracy_mode"
      | "binary_sensor.samsung_s21_wifi_state"
      | "binary_sensor.samsung_s21_power_save"
      | "device_tracker.samsung_s21"
      | "sensor.samsung_s21_ringer_mode"
      | "sensor.samsung_s21_audio_mode"
      | "sensor.samsung_s21_volume_level_call"
      | "sensor.samsung_s21_volume_level_ringer"
      | "sensor.samsung_s21_volume_level_notification"
      | "sensor.samsung_s21_battery_level"
      | "sensor.samsung_s21_battery_state"
      | "sensor.samsung_s21_charger_type"
      | "sensor.samsung_s21_geocoded_location"
      | "sensor.samsung_s21_high_accuracy_update_interval"
      | "sensor.samsung_s21_wifi_connection"
      | "sensor.samsung_s21_wifi_bssid"
      | "sensor.samsung_s21_wifi_ip_address"
      | "sensor.samsung_s21_wifi_link_speed"
      | "sensor.samsung_s21_wifi_frequency"
      | "sensor.samsung_s21_wifi_signal_strength"
      | "sensor.samsung_s21_next_alarm"
      | "sensor.samsung_s21_proximity_sensor"
      | "sensor.samsung_s21_steps_sensor"
      | "sensor.samsung_s21_current_time_zone"
      | "device_tracker.galaxy_watch4_bthm_2"
      | "sensor.galaxy_watch4_bthm_battery_level_2"
      | "sensor.galaxy_watch4_bthm_battery_state_2"
      | "sensor.galaxy_watch4_bthm_charger_type_2"
      | "binary_sensor.wilmisen_focus"
      | "device_tracker.wilmisen"
      | "sensor.wilmisen_floors_descended"
      | "sensor.wilmisen_activity"
      | "sensor.wilmisen_floors_ascended"
      | "sensor.wilmisen_distance"
      | "sensor.wilmisen_battery_level"
      | "sensor.wilmisen_steps"
      | "sensor.wilmisen_average_active_pace"
      | "sensor.wilmisen_battery_state"
      | "sensor.wilmisen_ssid"
      | "sensor.wilmisen_connection_type"
      | "sensor.wilmisen_bssid"
      | "sensor.wilmisen_storage"
      | "sensor.wilmisen_sim_2"
      | "sensor.wilmisen_sim_1"
      | "sensor.wilmisen_location_permission"
      | "sensor.wilmisen_app_version"
      | "sensor.wilmisen_last_update_trigger"
      | "sensor.wilmisen_geocoded_location"
      | "sensor.wilmisen_audio_output"
      | "binary_sensor.rack_switch_0_overheating"
      | "binary_sensor.rack_switch_0_overpowering"
      | "binary_sensor.rack_switch_0_overvoltage"
      | "binary_sensor.shellyplusplugs_d4d4da7bf9e0_switch_0_overcurrent"
      | "button.rack_reboot"
      | "sensor.rack_power"
      | "sensor.rack_energy"
      | "update.rack_firmware_update"
      | "sensor.swedish_calendar_date"
      | "sensor.swedish_calendar_weekday"
      | "sensor.swedish_calendar_workfree_day"
      | "sensor.swedish_calendar_red_day"
      | "sensor.swedish_calendar_week"
      | "sensor.today_is"
      | "sensor.swedish_calendar_eve"
      | "sensor.swedish_calendar_holiday"
      | "sensor.swedish_calendar_day_before_workfree_holiday"
      | "sensor.swedish_calendar_name_day"
      | "sensor.swedish_calendar_flag_day"
      | "sensor.swedish_calendar_theme_day"
      | "sensor.disk_use_percent_config"
      | "sensor.memory_use_percent"
      | "sensor.processor_use"
      | "sensor.watchman_last_updated"
      | "sensor.watchman_missing_entities"
      | "sensor.watchman_missing_services"
      | "sensor.elkostnad_dagligen"
      | "sensor.elpris_manad"
      | "sensor.tv_vardagsrum_device"
      | "sensor.nest_hub_v2_device"
      | "sensor.nest_hub_v2_alarms"
      | "sensor.nest_hub_v2_timers"
      | "sensor.hallen_device"
      | "sensor.hallen_alarms"
      | "sensor.hallen_timers"
      | "sensor.kok_device"
      | "sensor.kok_alarms"
      | "sensor.kok_timers"
      | "sensor.vardagsrum_device"
      | "sensor.vardagsrum_alarms"
      | "sensor.vardagsrum_timers"
      | "number.nest_hub_v2_alarm_volume"
      | "number.hallen_alarm_volume"
      | "number.kok_alarm_volume"
      | "number.vardagsrum_alarm_volume"
      | "conversation.openai_conversation"
      | "media_player.benjaminsxbox"
      | "media_player.xbox"
      | "weather.smhi_home"
      | "switch.wake_on_lan"
      | "switch.sleep_al"
      | "switch.adaptive_lighting_sleep_mode_dummy"
      | "switch.adaptive_lighting_adapt_color_dummy"
      | "switch.adaptive_lighting_adapt_brightness_dummy"
      | "switch.adaptive_lighting_dummy"
      | "switch.adaptive_lighting_sleep_mode_sovrum"
      | "switch.adaptive_lighting_adapt_color_sovrum"
      | "switch.adaptive_lighting_adapt_brightness_sovrum"
      | "switch.adaptive_lighting_sovrum"
      | "switch.adaptive_lighting_sleep_mode_garderob"
      | "switch.adaptive_lighting_adapt_color_garderob"
      | "switch.adaptive_lighting_adapt_brightness_garderob"
      | "switch.adaptive_lighting_garderob"
      | "switch.adaptive_lighting_sleep_mode_vardagsrum"
      | "switch.adaptive_lighting_adapt_color_vardagsrum"
      | "switch.adaptive_lighting_adapt_brightness_vardagsrum"
      | "switch.adaptive_lighting_vardagsrum"
      | "switch.adaptive_lighting_sleep_mode_hall"
      | "switch.adaptive_lighting_adapt_color_hall"
      | "switch.adaptive_lighting_adapt_brightness_hall"
      | "switch.adaptive_lighting_hall"
      | "switch.adaptive_lighting_sleep_mode_kok"
      | "switch.adaptive_lighting_adapt_color_kok"
      | "switch.adaptive_lighting_adapt_brightness_kok"
      | "switch.adaptive_lighting_kok"
      | "switch.adaptive_lighting_sleep_mode_kontor"
      | "switch.adaptive_lighting_adapt_color_kontor"
      | "switch.adaptive_lighting_adapt_brightness_kontor"
      | "switch.adaptive_lighting_kontor"
      | "switch.luftrenare_barnlas"
      | "switch.luftrenare_strom"
      | "switch.vattenskal"
      | "switch.fonster_vardagsrum"
      | "switch.rack"
      | "switch.nest_hub_v2_do_not_disturb"
      | "switch.hallen_do_not_disturb"
      | "switch.kok_do_not_disturb"
      | "switch.vardagsrum_do_not_disturb"
      | "switch.button_card_pre_release"
      | "update.android_tv_remote_card_with_touchpad_haptic_feedback_keyboard_and_more_update"
      | "update.your_ha_digital_twin_floor3d_card_update"
      | "update.multiscrape_update"
      | "update.rgb_light_card_update"
      | "update.mini_graph_card_update"
      | "update.atomic_calendar_revive_update"
      | "update.vacuum_card_update"
      | "update.ios_themes_dark_mode_and_light_mode_update"
      | "update.noctis_update"
      | "update.opnsense_integration_for_home_assistant_update"
      | "update.streamline_card_update"
      | "update.mini_media_player_update"
      | "update.extended_openai_conversation_update"
      | "update.bar_card_update"
      | "update.light_entity_card_update"
      | "update.kiosk_mode_update"
      | "update.fold_entity_row_update"
      | "update.proxmox_ve_update"
      | "update.dual_gauge_card_update"
      | "update.card_mod_update"
      | "update.vertical_stack_in_card_update"
      | "update.auto_entities_update"
      | "update.alarmo_update"
      | "update.powercalc_update"
      | "update.ui_lovelace_minimalist_update"
      | "update.weather_radar_card_update"
      | "update.bubble_card_update"
      | "update.mushroom_update"
      | "update.xiaomi_vacuum_map_card_update"
      | "update.horizon_card_update"
      | "update.stack_in_card_update"
      | "update.my_cards_bundle_update"
      | "update.slider_button_card_update"
      | "update.svensk_postutdelning_update"
      | "update.local_tuya_update"
      | "update.adaptive_lighting_update"
      | "update.nordpool_update"
      | "update.jellyfin_update"
      | "update.layout_card_update"
      | "update.header_authentication_update"
      | "update.hacs_update"
      | "update.swipe_card_update"
      | "update.button_card_update"
      | "update.blitzortung_org_lightning_detector_update"
      | "update.auto_generating_mushroom_dashboard_strategy_update"
      | "update.mushroom_themes_update"
      | "update.google_home_update"
      | "update.llama_conversation_update"
      | "update.clock_weather_card_update"
      | "update.decluttering_card_update"
      | "update.spotcast_update"
      | "update.apexcharts_card_update"
      | "update.default_dashboard_update"
      | "update.state_switch_update"
      | "update.bubble_update"
      | "update.weather_chart_card_update"
      | "update.simple_weather_card_update"
      | "update.spotify_lovelace_card_update"
      | "update.spook_not_your_homie_update"
      | "update.pyscript_update"
      | "update.sankey_chart_card_update"
      | "update.home_assistant_swipe_navigation_update"
      | "update.presence_simulation_update"
      | "update.watchman_update"
      | "sensor.z_stick_gen5_usb_controller_status"
      | "sensor.sensor_hall_node_status"
      | "button.sensor_hall_ping"
      | "sensor.sensor_hall_last_seen"
      | "sensor.ingo"
      | "sensor.sensor_hall_basic"
      | "sensor.sensor_hall_air_temperature"
      | "sensor.sensor_hall_illuminance"
      | "sensor.sensor_hall_humidity"
      | "sensor.sensor_hall_ultraviolet"
      | "button.sensor_hall_idle_home_security_cover_status"
      | "binary_sensor.multisensor_6_tampering_product_cover_removed"
      | "button.sensor_hall_idle_home_security_motion_sensor_status"
      | "binary_sensor.sensor_hall_motion_detection"
      | "sensor.sensor_hall_battery_level"
      | "binary_sensor.multisensor_6_low_battery_level"
      | "update.multisensor_6_firmware"
      | "sensor.current_version"
      | "binary_sensor.home_assistant_versions_update_available"
      | "sensor.home_assistant_versions"
      | "binary_sensor.docker_hub_update_available"
      | "sensor.docker_hub"
      | "sensor.hacs_installed"
      | "media_player.vardagsrum"
      | "media_player.kok"
      | "stt.faster_whisper"
      | "tts.piper"
      | "wake_word.openwakeword"
      | "wake_word.snowboy"
      | "device_tracker.fw_sanden01"
      | "device_tracker.fw_iphone"
      | "device_tracker.fw_benjamins_s21_ultra"
      | "binary_sensor.fw_pending_notices_present"
      | "update.fw_firmware_updates_available"
      | "media_player.hogtalare"
      | "sensor.fw_memory_used_percentage"
      | "sensor.fw_cpu_usage"
      | "sensor.fw_system_load_average_one_minute"
      | "sensor.fw_system_load_average_five_minute"
      | "sensor.fw_system_load_average_fifteen_minute"
      | "sensor.fw_system_boottime"
      | "sensor.fw_wireguard_server_wireguard_status"
      | "sensor.fw_wireguard_server_site_status"
      | "sensor.fw_wireguard_server_mullvad_status"
      | "sensor.fw_gateway_wan_dhcp_status"
      | "sensor.fw_gateway_wan_dhcp6_status"
      | "sensor.fw_gateway_wireguard_gw_status"
      | "sensor.fw_gateway_mullvad_gw_status"
      | "sensor.fw_gateway_phonewan_dhcp_status"
      | "sensor.fw_interface_lan_status"
      | "sensor.fw_interface_lan_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_lan_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_loopback_status"
      | "sensor.fw_interface_loopback_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_loopback_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_k3s_status"
      | "sensor.fw_interface_k3s_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_k3s_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_mgmt_status"
      | "sensor.fw_interface_mgmt_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_mgmt_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_iot_status"
      | "sensor.fw_interface_iot_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_iot_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_main_status"
      | "sensor.fw_interface_main_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_main_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_guest_status"
      | "sensor.fw_interface_guest_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_guest_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_hostvm_status"
      | "sensor.fw_interface_hostvm_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_hostvm_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_wan_status"
      | "sensor.fw_interface_wan_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_wan_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_wifi_status"
      | "sensor.fw_interface_wifi_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_wifi_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_vpnvlan_status"
      | "sensor.fw_interface_vpnvlan_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_vpnvlan_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_mullvad_status"
      | "sensor.fw_interface_mullvad_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_mullvad_outbytes_kilobytes_per_second"
      | "sensor.fw_interface_wireguard_status"
      | "sensor.fw_interface_wireguard_inbytes_kilobytes_per_second"
      | "sensor.fw_interface_wireguard_outbytes_kilobytes_per_second"
      | "sensor.fw_filesystem_used_percentage_root"
      | "sensor.fw_temp_zone_0"
      | "sensor.fw_temp_zone_1"
      | "sensor.fw_dhcp_leases_all"
      | "media_player.hallen"
      | "media_player.sovrum"
      | "sensor.youtube_watching"
      | "binary_sensor.bertil_mop_attached"
      | "binary_sensor.bertil_water_box_attached"
      | "binary_sensor.bertil_cleaning"
      | "binary_sensor.bertil_charging"
      | "image.bertil_map_0"
      | "select.bertil_mop_intensity"
      | "select.bertil_selected_map"
      | "sensor.bertil_main_brush_time_left"
      | "sensor.bertil_side_brush_time_left"
      | "sensor.bertil_filter_time_left"
      | "sensor.bertil_sensor_time_left"
      | "sensor.bertil_cleaning_time"
      | "sensor.bertil_total_cleaning_time"
      | "sensor.bertil_total_cleaning_count"
      | "sensor.bertil_status"
      | "sensor.bertil_cleaning_area"
      | "sensor.bertil_total_cleaning_area"
      | "sensor.bertil_vacuum_error"
      | "sensor.bertil_battery_2"
      | "sensor.bertil_last_clean_start"
      | "sensor.bertil_last_clean_end"
      | "sensor.bertil_current_room"
      | "vacuum.bertil"
      | "media_player.android_tv"
      | "number.bertil_volume"
      | "switch.bertil_child_lock"
      | "switch.bertil_dnd_switch"
      | "time.bertil_do_not_disturb_begin"
      | "time.bertil_do_not_disturb_end"
      | "button.bertil_matta_vardagsrum"
      | "button.bertil_vardagsrum"
      | "button.bertil_tyst"
      | "button.bertil_after_meals"
      | "button.bertil_full_cleaning"
      | "todo.handla"
      | "todo.forslagslada"
      | "sensor.jarvis_last_msg"
      | "sensor.jarvis_last_location"
      | "sensor.jarvis_last_msg_time"
      | "script.blinkande_lampor"
      | "script.alarm_utlost"
      | "script.tand_alla_lampor"
      | "script.musik_hogtalare_energi"
      | "script.musik_hogtalare_edm"
      | "script.qr_wifi_gast"
      | "script.qr_wifi_iot"
      | "script.qr_wifi_main"
      | "script.luftrenare_sleep_lage"
      | "script.spela_spotify"
      | "script.musik_hogtalare_stada"
      | "script.stang_av_allt"
      | "script.sunrise"
      | "script.lamna_hem"
      | "script.slack_allt_utom_vardagsrum"
      | "script.turn_on_flux"
      | "script.alarm_notis_2"
      | "script.alarm_siren_2"
      | "script.set_android_alarm"
      | "script.todo_uppgift"
      | "script.godnatt"
      | "script.volym_hogtalare_0_15"
      | "script.hitta_wilmisen"
      | "script.hitta_samsung_s21"
      | "script.dammsuga_sovrum_2"
      | "script.dammsuga_badrum"
      | "script.dammsuga_kontor"
      | "script.dammsuga_hall"
      | "script.dammsuga_vardagsrum"
      | "script.dammsuga_garderob"
      | "script.starta_dammsugare_2_timmar"
      | "script.starta_dammsugare_4_timmar"
      | "script.timer_tvatt"
      | "script.ha_show_sidebar"
      | "script.musik_hogtalare_mys_2"
      | "script.musik_hogtalare_mys_3"
      | "script.mysig_musik_slumpmassig"
      | "script.musik_hall_mys"
      | "script.musik_hall_mys_2"
      | "script.musik_hall_mys_3"
      | "script.hogtalare_energi_slumpmassig"
      | "script.musik_hogtalare_energi_2"
      | "script.musik_hogtalare_energi_3"
      | "script.musik_hall_energi"
      | "script.musik_hall_energi_2_2"
      | "script.musik_hall_energi_3"
      | "script.update"
      | "script.send_tts_google_home_resume"
      | "script.text_alert"
      | "script.text_alert_image"
      | "script.morgon_mat_paminnelse"
      | "script.spela_upp_tv"
      | "script.musik_hogtalare_mys_4"
      | "script.jarvis_glomt_dorr"
      | "script.starta_tvatt"
      | "script.dammsuga_kok"
      | "script.dammsuga_fraga_android"
      | "script.dammsuga_fraga_ios"
      | "script.jarvis_matlada_paminnelse"
      | "script.jarvis_valkommen_hem"
      | "script.jarvis_castar_tv"
      | "script.jarvis_stang_av_tv"
      | "script.jarvis_godnatt"
      | "script.jarvis_dockar_bertil"
      | "script.cast_utan_ljud_del_1"
      | "script.adaptive_lighting_sovlage_pa"
      | "script.adaptive_lighting_sovlage_av"
      | "script.cast_utan_ljud_del_2"
      | "script.stang_av_tv_vardagsrum"
      | "script.volym_hogtalare_0_3"
      | "script.morgon"
      | "script.starta_jellyfin"
      | "script.lampa_pa_snabbt"
      | "script.slack_sovrum"
      | "script.volym_hogtalare_0_4_2"
      | "script.speech_engine"
      | "script.announcement"
      | "script.briefing"
      | "script.daily_briefing"
      | "script.jarvis_already_done"
      | "script.jarvis_response"
      | "script.house_party_protocol_on"
      | "script.house_party_protocol_off"
      | "script.google_interjection"
      | "script.jarvis_said_what"
      | "script.google_home_tts_screen"
      | "media_player.vlc_telnet"
      | "sensor.hem_nearest_device"
      | "sensor.hem_nearest_distance"
      | "sensor.hem_nearest_direction_of_travel"
      | "sensor.hem_benjamin_distance"
      | "sensor.hem_benjamin_direction_of_travel"
      | "sensor.hem_2_nearest_device"
      | "sensor.hem_2_nearest_distance"
      | "sensor.hem_2_nearest_direction_of_travel"
      | "sensor.hem_2_wilma_distance"
      | "sensor.hem_2_wilma_direction_of_travel"
      | "sensor.imac_ip"
      | "sensor.imac_cpu"
      | "sensor.imac_uptime"
      | "media_player.spotify_home_assistant"
      | "device_tracker.ty"
      | "device_tracker.gx5c0654"
      | "device_tracker.ty_2"
      | "device_tracker.ty_3"
      | "device_tracker.7f_bf_bf_27_e7_ea"
      | "device_tracker.55_e3_18_d8_3e_29"
      | "device_tracker.72_72_72_2f_1f_2f"
      | "device_tracker.61_23_82_20_4e_f7"
      | "device_tracker.56_18_5f_17_32_64"
      | "device_tracker.48_77_e8_b0_4a_df"
      | "device_tracker.6e_34_99_0f_4c_2a"
      | "device_tracker.63_63_63_a6_12_9f"
      | "device_tracker.77_2e_42_63_0f_64"
      | "device_tracker.6b_c6_90_e7_41_51"
      | "device_tracker.6a_20_c5_aa_6d_14"
      | "device_tracker.41_a5_77_bb_5d_04"
      | "device_tracker.74_09_d7_b7_9a_0b"
      | "device_tracker.7b_28_41_5a_b1_3e"
      | "device_tracker.78_0b_f2_42_a9_24"
      | "device_tracker.4b_c0_31_c9_29_f7"
      | "device_tracker.75_2f_82_6a_f9_ee"
      | "device_tracker.60_d7_8c_49_24_23"
      | "device_tracker.66_84_55_3d_61_20"
      | "device_tracker.5d_23_9c_27_73_26"
      | "device_tracker.72_0e_50_1c_be_be"
      | "device_tracker.49_a3_b6_f0_a8_b9"
      | "device_tracker.79_50_ef_bb_f6_5c"
      | "device_tracker.5b_9a_7a_20_a1_1a"
      | "device_tracker.60_e7_c4_dc_3c_c5"
      | "device_tracker.77_ba_9c_6a_7b_93"
      | "device_tracker.63_9a_18_1d_f0_2e"
      | "device_tracker.52_78_6d_40_79_52"
      | "device_tracker.7b_9c_6f_12_0d_1b"
      | "device_tracker.55_83_b5_92_c2_7d"
      | "device_tracker.44_d9_f7_88_6f_20"
      | "device_tracker.54_11_f3_9c_b0_70"
      | "device_tracker.59_07_c8_cc_45_c2"
      | "device_tracker.7e_76_d2_81_59_9d"
      | "device_tracker.4e_2e_e3_7a_09_a3"
      | "device_tracker.44_b9_ea_36_17_b5"
      | "device_tracker.78_ab_42_73_75_a3"
      | "device_tracker.79_07_f8_61_a4_d5"
      | "device_tracker.6b_4d_0c_ff_78_8e"
      | "device_tracker.51_49_45_86_22_73"
      | "device_tracker.5b_40_4d_b6_52_fb"
      | "device_tracker.6c_9f_d4_20_c6_64"
      | "device_tracker.4e_9a_70_43_f8_f5"
      | "device_tracker.64_b9_b7_1f_60_ae"
      | "device_tracker.5a_15_cf_3c_76_64"
      | "device_tracker.6f_98_83_1f_fd_77"
      | "device_tracker.59_d1_75_25_53_e9"
      | "device_tracker.65_5d_61_58_d0_a3"
      | "device_tracker.69_84_75_f2_90_05"
      | "device_tracker.7a_b0_8f_35_b1_6a"
      | "device_tracker.7a_02_9e_e7_8d_67"
      | "device_tracker.42_0e_08_a1_f4_07"
      | "device_tracker.5a_86_e7_18_3c_b2"
      | "device_tracker.60_df_c0_c8_aa_0a"
      | "device_tracker.59_a3_3e_0e_20_eb"
      | "device_tracker.7d_85_5b_4b_7e_ec"
      | "device_tracker.40_06_99_36_84_53"
      | "device_tracker.68_4d_1f_b1_c5_12"
      | "device_tracker.63_e8_8d_54_c8_d0"
      | "device_tracker.smart_tag"
      | "device_tracker.smart_tag_2"
      | "device_tracker.4b_64_c6_5e_a9_5f"
      | "device_tracker.57_fa_b4_11_25_09"
      | "device_tracker.50_fe_f9_b7_4f_bf"
      | "device_tracker.4e_25_5d_a1_ef_ce"
      | "device_tracker.41_4e_8e_71_9b_9c"
      | "device_tracker.smart_tag_3"
      | "device_tracker.5b_c4_eb_fc_c0_fb"
      | "device_tracker.4d_ef_7e_9e_ca_fa"
      | "device_tracker.smart_tag_4"
      | "device_tracker.64_0b_c9_f9_c0_2c"
      | "device_tracker.smart_tag_5"
      | "device_tracker.smart_tag_6"
      | "device_tracker.64_61_5d_78_27_05"
      | "device_tracker.smart_tag_7"
      | "device_tracker.7e_ac_07_fc_14_43"
      | "device_tracker.55_73_60_7f_4a_56"
      | "device_tracker.6b_fc_b7_66_ad_1c"
      | "device_tracker.smart_tag_8"
      | "device_tracker.smart_tag_9"
      | "device_tracker.smart_tag_10"
      | "device_tracker.41_d7_42_5d_15_e0"
      | "device_tracker.60_c9_fc_57_4f_47"
      | "device_tracker.smart_tag_11"
      | "device_tracker.5a_8e_a4_54_d4_66"
      | "device_tracker.4f_94_79_a5_84_80"
      | "device_tracker.5f_28_ce_3a_db_11"
      | "device_tracker.smart_tag_12"
      | "device_tracker.74_a3_80_ea_69_be"
      | "device_tracker.smart_tag_13"
      | "device_tracker.6c_85_31_75_d2_ee"
      | "device_tracker.5a_3e_cc_3a_63_42"
      | "device_tracker.smart_tag_14"
      | "device_tracker.66_7c_34_b4_ee_f9"
      | "device_tracker.smart_tag_15"
      | "device_tracker.57_ae_d5_f5_3b_4f"
      | "device_tracker.54_79_ef_b5_d7_27"
      | "device_tracker.42_62_f2_cd_c8_d4"
      | "device_tracker.smart_tag_16"
      | "device_tracker.78_ca_e9_96_85_04"
      | "device_tracker.7d_1a_cf_c3_d2_b9"
      | "device_tracker.smart_tag_17"
      | "device_tracker.63_62_82_d3_c2_48"
      | "device_tracker.59_91_55_89_c4_ac"
      | "device_tracker.smart_tag_18"
      | "device_tracker.67_5d_01_be_22_a9"
      | "device_tracker.smart_tag_19"
      | "device_tracker.59_99_99_39_50_df"
      | "device_tracker.69_f1_1d_41_66_95"
      | "device_tracker.smart_tag_20"
      | "device_tracker.70_88_88_4d_09_8f"
      | "device_tracker.smart_tag_21"
      | "device_tracker.4f_52_7c_5c_11_c0"
      | "device_tracker.59_d9_f9_a1_5e_01"
      | "device_tracker.smart_tag_22"
      | "device_tracker.47_e5_e6_3d_80_1f"
      | "device_tracker.smart_tag_23"
      | "device_tracker.5c_55_11_8d_4c_36"
      | "device_tracker.5f_0a_80_56_13_21"
      | "device_tracker.smart_tag_24"
      | "device_tracker.4b_a0_da_a3_b8_47"
      | "device_tracker.smart_tag_25"
      | "device_tracker.74_38_ef_64_2b_33"
      | "device_tracker.smart_tag_26"
      | "device_tracker.5b_cd_01_18_41_31"
      | "device_tracker.5c_97_d7_7d_33_36"
      | "device_tracker.smart_tag_27"
      | "device_tracker.66_34_3d_0d_55_4e"
      | "device_tracker.78_69_c1_5b_d0_0a"
      | "device_tracker.smart_tag_28"
      | "device_tracker.72_0f_6c_7f_24_63"
      | "device_tracker.57_5d_30_e0_c3_34"
      | "device_tracker.smart_tag_29"
      | "device_tracker.68_d3_4e_a5_af_04"
      | "device_tracker.51_1f_38_6e_92_51"
      | "device_tracker.smart_tag_30"
      | "device_tracker.4c_05_3c_fe_04_06"
      | "device_tracker.smart_tag_31"
      | "device_tracker.7b_0a_12_97_31_01"
      | "device_tracker.77_9c_09_8e_a7_20"
      | "device_tracker.smart_tag_32"
      | "device_tracker.smart_tag_33"
      | "device_tracker.5d_cf_a6_84_89_54"
      | "device_tracker.6d_07_d2_ce_44_76"
      | "device_tracker.smart_tag_34"
      | "device_tracker.6e_42_17_42_fb_58"
      | "device_tracker.71_ea_ba_81_b8_77"
      | "device_tracker.smart_tag_35"
      | "device_tracker.60_e1_81_4a_b5_a4"
      | "device_tracker.56_8a_64_6f_ab_ad"
      | "device_tracker.smart_tag_36"
      | "device_tracker.47_06_40_e2_09_16"
      | "device_tracker.smart_tag_37"
      | "device_tracker.4d_87_22_14_25_4b"
      | "device_tracker.52_78_cd_6d_75_8f"
      | "device_tracker.smart_tag_38"
      | "device_tracker.48_4a_2c_32_6c_3e"
      | "device_tracker.smart_tag_39"
      | "device_tracker.6f_46_d2_4f_e7_db"
      | "device_tracker.56_4a_24_29_a4_2e"
      | "device_tracker.smart_tag_40"
      | "device_tracker.7e_dc_76_68_5a_5c"
      | "device_tracker.smart_tag_41"
      | "device_tracker.6d_4b_73_6a_85_39"
      | "device_tracker.6c_c7_f2_57_df_c5"
      | "device_tracker.smart_tag_42"
      | "device_tracker.smart_tag_43"
      | "device_tracker.4f_e6_12_dd_0d_67"
      | "device_tracker.62_7a_56_89_72_39"
      | "device_tracker.67_8d_c3_35_ec_e5"
      | "device_tracker.smart_tag_44"
      | "device_tracker.62_7d_8e_cb_65_cc"
      | "device_tracker.48_a4_37_b6_bd_70"
      | "device_tracker.smart_tag_45"
      | "device_tracker.70_89_75_c9_9c_88"
      | "device_tracker.smart_tag_46"
      | "device_tracker.57_f6_92_7d_b6_43"
      | "device_tracker.smart_tag_47"
      | "device_tracker.58_5f_d7_95_92_a9"
      | "device_tracker.4c_03_5c_fc_fd_c1"
      | "device_tracker.66_b4_3d_3e_b7_d5"
      | "device_tracker.5e_3a_c8_82_80_4a"
      | "device_tracker.smart_tag_48"
      | "device_tracker.smart_tag_49"
      | "device_tracker.6a_11_6b_d6_4c_ef"
      | "device_tracker.smart_tag_50"
      | "device_tracker.qmwheel"
      | "device_tracker.4f_a0_d7_4d_7d_53"
      | "device_tracker.75_cf_f1_ba_64_36"
      | "device_tracker.smart_tag_51"
      | "device_tracker.69_88_5b_5f_20_6f"
      | "device_tracker.smart_tag_52"
      | "device_tracker.smart_tag_53"
      | "device_tracker.64_25_65_64_92_99"
      | "device_tracker.5d_af_76_46_e0_77"
      | "device_tracker.smart_tag_54"
      | "device_tracker.smart_tag_55"
      | "device_tracker.65_91_d6_62_10_31"
      | "device_tracker.54_c3_b2_22_d6_96"
      | "device_tracker.smart_tag_56"
      | "device_tracker.smart_tag_57"
      | "device_tracker.64_29_0f_22_94_e8"
      | "device_tracker.75_6b_c4_af_d5_44"
      | "device_tracker.smart_tag_58"
      | "device_tracker.smart_tag_59"
      | "device_tracker.50_1d_6f_02_71_66"
      | "device_tracker.smart_tag_60"
      | "device_tracker.60_24_29_7d_d9_78"
      | "device_tracker.smart_tag_61"
      | "device_tracker.4a_34_ab_6d_c3_6a"
      | "device_tracker.63_88_dd_49_9b_bb"
      | "device_tracker.smart_tag_62"
      | "device_tracker.78_a5_a6_9c_5f_f2"
      | "device_tracker.smart_tag_63"
      | "device_tracker.smart_tag_64"
      | "device_tracker.40_79_a1_da_0c_c4"
      | "device_tracker.smart_tag_65"
      | "device_tracker.44_f5_4d_10_b4_c5"
      | "device_tracker.77_8c_51_1a_4c_78"
      | "device_tracker.72_04_8b_a9_68_93"
      | "device_tracker.smart_tag_66"
      | "device_tracker.58_2e_8d_82_ef_9c"
      | "device_tracker.6b_51_65_9a_82_1e"
      | "device_tracker.smart_tag_67"
      | "device_tracker.60_9b_c6_b2_74_48"
      | "device_tracker.57_4c_41_d5_c8_28"
      | "device_tracker.smart_tag_68"
      | "device_tracker.smart_tag_69"
      | "device_tracker.smart_tag_70"
      | "device_tracker.7a_18_a9_9a_59_80"
      | "device_tracker.55_dd_d9_3d_bc_4b"
      | "device_tracker.smart_tag_71"
      | "device_tracker.smart_tag_72"
      | "device_tracker.54_d9_3a_ee_95_b8"
      | "device_tracker.4d_4f_88_87_7a_1e"
      | "device_tracker.smart_tag_73"
      | "device_tracker.63_e4_47_52_94_c4"
      | "device_tracker.69_79_71_45_3c_a7"
      | "device_tracker.smart_tag_74"
      | "device_tracker.smart_tag_75"
      | "device_tracker.69_81_75_5b_ea_9e"
      | "device_tracker.61_a9_4d_47_e3_3c"
      | "device_tracker.smart_tag_76"
      | "device_tracker.63_04_ac_61_8c_7c"
      | "device_tracker.6f_40_4a_79_2c_94"
      | "device_tracker.smart_tag_77"
      | "device_tracker.7b_36_5d_1c_a6_46"
      | "device_tracker.64_e7_46_57_79_d7"
      | "device_tracker.52_3c_2b_ec_12_e8"
      | "device_tracker.smart_tag_78"
      | "device_tracker.smart_tag_79"
      | "device_tracker.56_b2_90_7b_64_07"
      | "device_tracker.63_24_a7_8c_a9_40"
      | "device_tracker.4a_e0_15_7d_01_91"
      | "device_tracker.48_4c_8b_12_66_72"
      | "device_tracker.smart_tag_80"
      | "device_tracker.7e_48_ce_ac_87_65"
      | "device_tracker.4f_fa_b2_55_8a_fc"
      | "device_tracker.smart_tag_81"
      | "device_tracker.53_fc_4b_50_a9_f2"
      | "device_tracker.79_e9_61_88_a6_24"
      | "device_tracker.smart_tag_82"
      | "device_tracker.62_07_a9_25_f9_d9"
      | "device_tracker.6b_ab_7a_4e_e8_2b"
      | "device_tracker.74_8c_08_92_b8_56"
      | "device_tracker.smart_tag_83"
      | "device_tracker.7e_7a_b8_dd_a1_04"
      | "device_tracker.62_a6_44_dd_9a_9b"
      | "device_tracker.53_28_9f_c0_3d_eb"
      | "device_tracker.smart_tag_84"
      | "device_tracker.4b_50_52_1c_66_7d"
      | "device_tracker.56_e3_97_2b_fa_20"
      | "device_tracker.smart_tag_85"
      | "device_tracker.smart_tag_86"
      | "device_tracker.52_9e_38_c3_24_85"
      | "device_tracker.42_d6_bc_73_12_92"
      | "device_tracker.58_c4_ad_d8_28_3f"
      | "device_tracker.smart_tag_87"
      | "device_tracker.gx525a27"
      | "device_tracker.smart_tag_88"
      | "device_tracker.75_90_d1_9f_c2_c0"
      | "device_tracker.60_5f_be_f8_d4_2e"
      | "device_tracker.47_20_5b_5b_c4_22"
      | "device_tracker.smart_tag_89"
      | "device_tracker.53_8c_a3_12_e1_1e"
      | "device_tracker.72_de_c8_9d_a2_6a"
      | "device_tracker.smart_tag_90"
      | "device_tracker.smart_tag_91"
      | "device_tracker.smart_tag_92"
      | "device_tracker.55_74_b2_d9_3f_8d"
      | "device_tracker.smart_tag_93"
      | "device_tracker.58_bb_4a_f8_27_41"
      | "device_tracker.42_a6_94_96_e8_07"
      | "device_tracker.6b_42_71_33_24_0b"
      | "device_tracker.smart_tag_94"
      | "device_tracker.65_df_d5_f0_8e_73"
      | "device_tracker.61_d9_95_fd_6d_d3"
      | "device_tracker.smart_tag_95"
      | "device_tracker.4c_21_57_6a_02_36"
      | "device_tracker.61_a7_04_26_00_15"
      | "device_tracker.smart_tag_96"
      | "device_tracker.7b_82_03_67_26_49"
      | "device_tracker.5c_d8_be_69_b5_f0"
      | "device_tracker.smart_tag_97"
      | "device_tracker.59_8d_87_59_ea_35"
      | "device_tracker.7c_7f_1e_c7_26_f9"
      | "device_tracker.smart_tag_98"
      | "device_tracker.7d_1d_73_a0_ca_fc"
      | "device_tracker.42_d8_81_2d_0b_a7"
      | "device_tracker.smart_tag_99"
      | "device_tracker.78_7d_7f_ef_65_e7"
      | "device_tracker.5e_1e_fe_7c_2b_ed"
      | "device_tracker.smart_tag_100"
      | "device_tracker.45_40_bb_e4_12_49"
      | "device_tracker.5d_d4_21_9f_82_2a"
      | "device_tracker.smart_tag_101"
      | "device_tracker.4a_a4_93_8c_96_17"
      | "device_tracker.48_45_a3_5e_29_99"
      | "device_tracker.smart_tag_102"
      | "device_tracker.7f_b8_da_04_73_e5"
      | "device_tracker.51_d1_d1_01_aa_0f"
      | "device_tracker.smart_tag_103"
      | "device_tracker.6a_5c_c2_f6_97_5d"
      | "device_tracker.smart_tag_104"
      | "device_tracker.6b_8c_3f_f9_b2_e8"
      | "device_tracker.62_4e_a0_ac_59_d4"
      | "device_tracker.smart_tag_105"
      | "device_tracker.smart_tag_106"
      | "device_tracker.64_6f_dc_9c_fd_05"
      | "device_tracker.6b_06_90_00_15_ca"
      | "device_tracker.4d_15_d9_d6_9b_69"
      | "device_tracker.smart_tag_107"
      | "device_tracker.smart_tag_108"
      | "device_tracker.45_11_bb_ca_19_f3"
      | "device_tracker.75_87_65_75_79_7b"
      | "device_tracker.67_d0_ab_24_b8_c8"
      | "device_tracker.smart_tag_109"
      | "device_tracker.smart_tag_110"
      | "device_tracker.5b_1a_da_7b_f8_0f"
      | "device_tracker.65_47_f6_29_4c_0a"
      | "device_tracker.47_67_17_46_3b_4d"
      | "device_tracker.smart_tag_111"
      | "device_tracker.4b_4b_4b_e5_fe_31"
      | "device_tracker.7a_fa_fa_d1_2b_f0"
      | "device_tracker.smart_tag_112"
      | "device_tracker.5f_d6_a2_6a_a3_a0"
      | "device_tracker.59_b9_a9_44_75_64"
      | "device_tracker.5e_4a_40_3b_42_ad"
      | "device_tracker.74_d7_18_7c_61_c6"
      | "device_tracker.60_13_0a_6d_4e_36"
      | "device_tracker.5f_9f_9f_b2_33_ba"
      | "device_tracker.smart_tag_113"
      | "device_tracker.smart_tag_114"
      | "device_tracker.54_8d_41_31_2d_00"
      | "device_tracker.49_e3_f6_66_f5_12"
      | "device_tracker.4d_f7_f2_21_f1_ae"
      | "device_tracker.smart_tag_115"
      | "device_tracker.smart_tag_116"
      | "device_tracker.4b_22_36_05_79_4c"
      | "device_tracker.49_13_9e_4c_94_d4"
      | "device_tracker.67_9a_2d_ff_a8_ec"
      | "device_tracker.smart_tag_117"
      | "device_tracker.smart_tag_118"
      | "device_tracker.7f_d8_ab_11_5c_f7"
      | "device_tracker.7a_9a_2a_3f_a0_14"
      | "device_tracker.smart_tag_119"
      | "device_tracker.smart_tag_120"
      | "device_tracker.51_29_75_75_e4_f6"
      | "device_tracker.4f_0b_3a_e8_fd_b2"
      | "device_tracker.51_89_05_62_21_da"
      | "device_tracker.45_03_00_cf_f0_97"
      | "device_tracker.smart_tag_121"
      | "device_tracker.smart_tag_122"
      | "device_tracker.67_02_f0_19_30_87"
      | "device_tracker.56_3c_09_0d_8b_fb"
      | "device_tracker.smart_tag_123"
      | "device_tracker.smart_tag_124"
      | "device_tracker.46_35_9d_93_7e_20"
      | "device_tracker.7c_e5_29_f0_56_e7"
      | "device_tracker.6a_ee_ac_90_bd_f2"
      | "device_tracker.smart_tag_125"
      | "device_tracker.smart_tag_126"
      | "device_tracker.53_12_32_c2_78_63"
      | "device_tracker.7a_b6_f0_a5_1e_cb"
      | "device_tracker.smart_tag_127"
      | "device_tracker.smart_tag_128"
      | "device_tracker.6f_90_a1_14_6f_ac"
      | "device_tracker.50_75_27_04_8a_57"
      | "device_tracker.4d_bd_a5_0b_05_4a"
      | "device_tracker.6c_24_48_9d_da_16"
      | "device_tracker.smart_tag_129"
      | "device_tracker.73_24_ef_46_8d_d9"
      | "device_tracker.61_bd_d3_7f_b5_63"
      | "device_tracker.smart_tag_130"
      | "device_tracker.smart_tag_131"
      | "device_tracker.7f_48_b0_9a_ac_07"
      | "device_tracker.7e_b2_34_6e_b5_35"
      | "device_tracker.4e_1a_90_80_45_64"
      | "device_tracker.smart_tag_132"
      | "device_tracker.smart_tag_133"
      | "device_tracker.57_04_ad_78_1c_7b"
      | "device_tracker.74_77_56_f0_7b_16"
      | "device_tracker.smart_tag_134"
      | "device_tracker.smart_tag_135"
      | "device_tracker.7b_72_36_78_70_cf"
      | "device_tracker.44_5d_11_aa_43_58"
      | "device_tracker.smart_tag_136"
      | "device_tracker.smart_tag_137"
      | "device_tracker.42_97_87_02_71_bf"
      | "device_tracker.7f_6f_67_dc_cb_a9"
      | "device_tracker.46_3c_c1_c9_0b_51"
      | "device_tracker.7b_ba_0c_b8_6a_6e"
      | "device_tracker.smart_tag_138"
      | "device_tracker.smart_tag_139"
      | "device_tracker.53_30_61_d4_eb_82"
      | "device_tracker.59_a5_9b_f0_f8_9c"
      | "device_tracker.smart_tag_140"
      | "device_tracker.smart_tag_141"
      | "device_tracker.4a_6e_35_47_a2_18"
      | "device_tracker.6a_ac_4f_01_1d_5d"
      | "device_tracker.42_28_9d_e7_2a_52"
      | "device_tracker.smart_tag_142"
      | "device_tracker.smart_tag_143"
      | "device_tracker.5c_dd_5d_0d_8d_a6"
      | "device_tracker.75_a3_28_e4_7c_0e"
      | "device_tracker.smart_tag_144"
      | "device_tracker.70_41_5c_6b_8a_a3"
      | "device_tracker.smart_tag_145"
      | "device_tracker.6c_65_61_9b_98_4b"
      | "device_tracker.76_98_6f_5b_59_2a"
      | "device_tracker.smart_tag_146"
      | "device_tracker.smart_tag_147"
      | "device_tracker.45_a8_14_59_66_cd"
      | "device_tracker.65_41_53_f0_f3_a4"
      | "device_tracker.4c_b5_09_ee_ed_d4"
      | "device_tracker.smart_tag_148"
      | "device_tracker.smart_tag_149"
      | "device_tracker.65_0f_5a_f8_16_02"
      | "device_tracker.4a_60_f5_a8_c8_39"
      | "device_tracker.65_93_85_2e_e5_8c"
      | "device_tracker.smart_tag_150"
      | "device_tracker.smart_tag_151"
      | "device_tracker.76_3e_ba_ef_a0_1a"
      | "device_tracker.76_ce_d2_8c_1f_13"
      | "device_tracker.smart_tag_152"
      | "device_tracker.smart_tag_153"
      | "device_tracker.72_30_aa_30_5b_80"
      | "device_tracker.67_d6_ee_f0_e9_bb"
      | "device_tracker.42_94_9f_3e_86_3d"
      | "device_tracker.smart_tag_154"
      | "device_tracker.smart_tag_155"
      | "device_tracker.4b_02_c6_02_0a_69"
      | "device_tracker.74_0d_d1_d8_0d_60"
      | "device_tracker.smart_tag_156"
      | "device_tracker.smart_tag_157"
      | "device_tracker.6d_4a_ae_b0_54_b6"
      | "device_tracker.4b_a2_36_68_fc_06"
      | "device_tracker.43_56_bc_fa_df_18"
      | "device_tracker.7d_95_00_a2_94_f2"
      | "device_tracker.smart_tag_158"
      | "device_tracker.smart_tag_159"
      | "device_tracker.61_5b_88_86_e8_bb"
      | "device_tracker.4c_c7_e2_5d_6f_c2"
      | "device_tracker.60_b7_bc_36_da_38"
      | "device_tracker.4a_36_0d_a1_4c_d0"
      | "device_tracker.4a_7f_b6_63_7f_47"
      | "device_tracker.5f_da_9d_ea_e1_87"
      | "device_tracker.51_bc_48_90_ac_a6"
      | "device_tracker.7a_cb_61_c2_b6_4a"
      | "device_tracker.6d_17_2a_c8_ca_cb"
      | "device_tracker.7e_8e_f6_4a_09_b7"
      | "device_tracker.50_5d_da_0a_8b_1a"
      | "device_tracker.74_a1_ab_b0_f0_7d"
      | "device_tracker.7f_e7_c5_28_66_92"
      | "device_tracker.6a_65_89_09_14_de"
      | "device_tracker.78_51_e5_14_ad_fc"
      | "device_tracker.smart_tag_160"
      | "device_tracker.45_4e_07_30_fd_8c"
      | "device_tracker.4d_4b_7c_4e_04_60"
      | "device_tracker.6b_75_da_1f_2d_eb"
      | "device_tracker.23_ca_23_26_6e_9d"
      | "device_tracker.smart_tag_161"
      | "device_tracker.1a_7b_75_4e_17_5d"
      | "device_tracker.71_de_29_11_2a_56"
      | "device_tracker.47_98_d7_3b_ed_7d"
      | "device_tracker.66_e2_40_aa_b8_1a"
      | "device_tracker.48_62_f7_52_40_99"
      | "device_tracker.51_7b_c3_dd_c1_b5"
      | "device_tracker.smart_tag_162"
      | "device_tracker.7d_45_20_76_c8_db"
      | "device_tracker.18_dd_5d_d8_cf_48"
      | "device_tracker.smart_tag_163"
      | "device_tracker.7f_62_4c_80_69_09"
      | "device_tracker.5a_42_f0_6e_eb_72"
      | "device_tracker.6b_74_f3_ed_5b_fc"
      | "device_tracker.67_04_4b_b6_7e_71"
      | "device_tracker.7d_f5_31_9c_2f_4d"
      | "device_tracker.4d_0d_ed_6d_6f_4f"
      | "device_tracker.37_41_b9_33_32_9d"
      | "device_tracker.6c_71_ff_db_39_8f"
      | "device_tracker.smart_tag_164"
      | "device_tracker.54_33_18_82_97_d7"
      | "device_tracker.smart_tag_165"
      | "device_tracker.43_d3_db_2a_8c_56"
      | "device_tracker.62_1b_f5_53_b1_fb"
      | "device_tracker.7e_74_33_b0_7e_2e"
      | "device_tracker.7c_ef_15_f5_df_22"
      | "device_tracker.44_80_d1_36_de_c1"
      | "device_tracker.13_95_6e_11_9f_0f"
      | "device_tracker.6b_bb_4c_ba_24_d2"
      | "device_tracker.63_88_0e_67_8f_e7"
      | "device_tracker.44_5a_f5_21_38_6a"
      | "device_tracker.60_cb_e5_69_2a_84"
      | "device_tracker.77_50_c3_1b_24_d6"
      | "device_tracker.71_63_0a_70_11_70"
      | "device_tracker.43_d9_f4_d9_46_89"
      | "device_tracker.smart_tag_166"
      | "device_tracker.51_15_16_f1_22_2f"
      | "device_tracker.7d_7d_7d_07_6e_36"
      | "device_tracker.smart_tag_167"
      | "device_tracker.13_cd_05_7f_b3_de"
      | "device_tracker.4a_12_7e_6e_f3_41"
      | "device_tracker.8c_79_f5_d2_8c_ff"
      | "device_tracker.5c_96_13_50_7c_c4"
      | "device_tracker.7f_b4_b1_61_ed_3b"
      | "device_tracker.66_5e_e2_32_f2_90"
      | "device_tracker.62_68_8d_0c_0e_de"
      | "device_tracker.16_b7_d7_96_4e_7e"
      | "device_tracker.52_5b_7f_0d_59_29"
      | "device_tracker.4f_81_7b_e3_ff_1f"
      | "device_tracker.5c_15_91_0d_ef_82"
      | "device_tracker.6f_59_14_47_c4_9c"
      | "device_tracker.6c_08_7a_f9_e3_da"
      | "device_tracker.0d_f7_35_15_f2_0f"
      | "device_tracker.67_af_ab_c5_a9_55"
      | "device_tracker.54_27_9e_13_ef_67"
      | "device_tracker.79_01_dd_8e_b0_57"
      | "device_tracker.4f_87_49_cd_88_95"
      | "device_tracker.4d_9a_31_0f_26_a7"
      | "device_tracker.42_53_78_8e_c2_10"
      | "device_tracker.30_f4_88_c0_fd_7c"
      | "device_tracker.smart_tag_168"
      | "device_tracker.smart_tag_169"
      | "device_tracker.4e_63_91_93_68_2d"
      | "device_tracker.smart_tag_170"
      | "device_tracker.68_e7_20_fa_9f_25"
      | "device_tracker.43_c7_b9_c3_7c_cd"
      | "device_tracker.55_97_23_8d_33_4c"
      | "device_tracker.51_0d_45_9f_59_fd"
      | "device_tracker.4b_78_81_16_e3_3d"
      | "device_tracker.7f_62_ac_c3_51_5d"
      | "device_tracker.4e_3d_84_86_67_a6"
      | "device_tracker.27_5b_f1_a5_9b_c5"
      | "device_tracker.6e_22_c4_25_42_16"
      | "device_tracker.smart_tag_171"
      | "device_tracker.smart_tag_172"
      | "device_tracker.78_5e_6e_02_cc_9c"
      | "device_tracker.27_56_a8_13_39_7c"
      | "device_tracker.59_40_22_a2_62_b3"
      | "device_tracker.7e_4f_57_04_88_92"
      | "device_tracker.50_37_44_10_3a_31"
      | "device_tracker.7e_70_77_ed_ec_e5"
      | "device_tracker.65_22_a1_70_62_8e"
      | "device_tracker.63_cd_85_d3_90_20"
      | "device_tracker.19_4f_fa_69_7b_97"
      | "device_tracker.58_b9_e9_4b_75_1e"
      | "device_tracker.75_c2_e5_37_eb_ec"
      | "device_tracker.68_23_26_87_c1_84"
      | "device_tracker.65_cd_99_38_05_9f"
      | "device_tracker.7e_e0_4f_49_e4_e4"
      | "device_tracker.61_ea_71_ec_61_95"
      | "device_tracker.6f_a1_86_a0_4c_f9"
      | "device_tracker.31_4f_ca_6b_c5_29"
      | "device_tracker.5c_57_72_7d_b6_99"
      | "device_tracker.42_1a_85_70_4a_f9"
      | "device_tracker.50_2a_82_13_69_cb"
      | "device_tracker.23_68_b0_3c_4d_ed"
      | "device_tracker.6f_73_bd_e0_0b_e1"
      | "device_tracker.73_e9_64_2f_22_eb"
      | "device_tracker.58_a5_3b_96_fe_f8"
      | "device_tracker.67_27_a7_57_5a_fb"
      | "device_tracker.78_57_9a_d4_f5_01"
      | "device_tracker.52_46_16_e1_b0_c1"
      | "device_tracker.37_8c_fb_35_81_3b"
      | "device_tracker.6c_ff_f6_c3_f0_fa"
      | "device_tracker.49_b6_49_49_95_bc"
      | "device_tracker.63_b0_d1_df_f5_bb"
      | "device_tracker.4a_5b_80_fe_d6_64"
      | "device_tracker.6f_8e_fe_fa_d2_7b"
      | "device_tracker.5d_77_a2_b0_8d_90"
      | "device_tracker.5d_ce_e1_1e_7c_72"
      | "device_tracker.6d_04_90_05_1e_c0"
      | "device_tracker.00_15_d5_ab_7f_06"
      | "device_tracker.50_f1_a1_5e_a2_ca"
      | "device_tracker.5b_45_25_34_5f_e3"
      | "device_tracker.6c_4a_c6_be_36_13"
      | "device_tracker.3f_29_3e_c0_03_cf"
      | "device_tracker.76_5b_ad_e7_9d_79"
      | "device_tracker.79_15_03_ea_d5_b0"
      | "device_tracker.74_34_34_8e_0e_35"
      | "device_tracker.47_93_3e_29_73_c0"
      | "device_tracker.76_29_03_e0_a8_da"
      | "device_tracker.69_76_8f_3d_11_a9"
      | "device_tracker.72_f2_b2_5a_30_89"
      | "device_tracker.2e_a9_39_9d_5a_b3"
      | "device_tracker.5d_1a_5b_ae_bf_7d"
      | "device_tracker.63_6d_6a_33_05_31"
      | "device_tracker.66_c9_3b_40_5f_39"
      | "device_tracker.60_f3_3a_42_48_e6"
      | "device_tracker.69_28_68_7d_48_5a"
      | "device_tracker.58_f5_83_50_32_c5"
      | "device_tracker.61_7d_73_a5_5d_9d"
      | "device_tracker.2c_0b_70_09_30_88"
      | "device_tracker.52_27_c3_86_ac_3a"
      | "device_tracker.47_fa_90_b2_46_f2"
      | "device_tracker.43_b2_ca_74_02_a0"
      | "device_tracker.47_a9_9e_bb_87_5e"
      | "device_tracker.72_4a_b6_fc_9b_ed"
      | "device_tracker.65_28_8e_77_f1_d0"
      | "device_tracker.15_8b_05_be_fc_5b"
      | "device_tracker.4e_22_50_fa_4b_9b"
      | "device_tracker.hue_color_candle"
      | "device_tracker.66_d3_85_3a_ee_3d"
      | "device_tracker.50_f5_e7_c7_c1_0b"
      | "device_tracker.1c_ba_41_00_8c_a4"
      | "device_tracker.7a_17_d1_a7_51_ab"
      | "device_tracker.4c_56_5b_65_37_06"
      | "device_tracker.78_6f_01_5e_f2_b4"
      | "device_tracker.68_0b_9a_9a_ee_78"
      | "device_tracker.40_53_7a_85_fa_d0"
      | "device_tracker.77_0b_35_1c_c9_ea"
      | "device_tracker.5e_9c_8f_ea_c7_17"
      | "device_tracker.77_6c_21_f7_f8_fa"
      | "device_tracker.4c_c2_f5_91_80_98"
      | "device_tracker.2b_bf_d0_16_ba_b3"
      | "device_tracker.72_21_bd_d7_d0_f4"
      | "device_tracker.43_14_6b_d7_b8_2b"
      | "device_tracker.6e_29_61_63_cf_4c"
      | "device_tracker.le_onyx"
      | "device_tracker.le_onyx_2"
      | "device_tracker.55_8f_5e_11_85_db"
      | "device_tracker.le_onyx_3"
      | "device_tracker.le_onyx_4"
      | "device_tracker.65_fa_b1_d8_3a_73"
      | "device_tracker.le_onyx_5"
      | "device_tracker.le_onyx_6"
      | "device_tracker.le_onyx_7"
      | "device_tracker.74_16_fb_26_79_fb"
      | "device_tracker.69_9c_ef_7e_b8_06"
      | "device_tracker.60_a5_0d_15_74_02"
      | "device_tracker.4f_4e_ac_13_92_bb"
      | "device_tracker.le_onyx_8"
      | "device_tracker.55_6a_81_8e_f6_ee"
      | "device_tracker.47_e1_21_72_df_3d"
      | "device_tracker.5e_c9_42_9f_85_c2"
      | "device_tracker.45_d8_3f_87_3f_0f"
      | "device_tracker.le_onyx_9"
      | "device_tracker.4d_83_64_d2_b7_41"
      | "device_tracker.48_6f_43_2b_bc_c3"
      | "device_tracker.47_70_4b_c3_4c_cb"
      | "device_tracker.5d_a0_86_7d_f4_5e"
      | "device_tracker.41_41_98_83_2c_b4"
      | "device_tracker.73_43_5b_cd_ae_f4"
      | "device_tracker.6e_21_46_8a_50_d1"
      | "device_tracker.77_33_73_44_98_7c"
      | "device_tracker.36_d1_e3_7b_9a_c1"
      | "device_tracker.63_ef_d8_2e_fa_a3"
      | "device_tracker.58_bd_b2_ca_c2_a0"
      | "device_tracker.4d_1b_f8_95_f0_18"
      | "device_tracker.46_87_fd_5f_f5_3b"
      | "device_tracker.le_onyx_10"
      | "device_tracker.77_a5_18_d0_51_ce"
      | "device_tracker.le_onyx_11"
      | "device_tracker.6b_f8_df_75_c5_5f"
      | "device_tracker.le_onyx_12"
      | "device_tracker.le_onyx_13"
      | "device_tracker.le_onyx_14"
      | "device_tracker.7a_34_61_e8_93_22"
      | "device_tracker.4e_88_80_a2_32_63"
      | "device_tracker.5e_91_eb_a6_cb_48"
      | "device_tracker.55_0d_43_14_81_91"
      | "device_tracker.le_onyx_15"
      | "device_tracker.7e_44_de_81_07_0a"
      | "device_tracker.42_b9_43_9c_75_09"
      | "device_tracker.le_onyx_16"
      | "device_tracker.7a_4f_b7_70_32_7d"
      | "device_tracker.le_onyx_17"
      | "device_tracker.le_onyx_18"
      | "device_tracker.57_da_fc_3f_91_f9"
      | "device_tracker.75_59_e4_9b_4b_4c"
      | "device_tracker.62_c3_82_55_a3_95"
      | "device_tracker.48_56_de_79_08_07"
      | "device_tracker.le_onyx_19"
      | "device_tracker.0b_d9_d3_e2_1b_67"
      | "device_tracker.le_onyx_20"
      | "device_tracker.le_onyx_21"
      | "device_tracker.41_d3_f0_f4_a5_ba"
      | "device_tracker.54_e1_86_24_a6_f9"
      | "device_tracker.50_a8_b3_06_b2_6c"
      | "device_tracker.73_e5_ea_59_06_5a"
      | "device_tracker.le_onyx_22"
      | "device_tracker.4d_32_58_46_18_78"
      | "device_tracker.6a_3d_37_c0_08_36"
      | "device_tracker.52_39_4a_25_4e_2c"
      | "device_tracker.55_1e_12_73_1e_7a"
      | "device_tracker.le_onyx_23"
      | "device_tracker.le_onyx_24"
      | "device_tracker.le_onyx_25"
      | "device_tracker.4a_71_8c_e6_52_85"
      | "device_tracker.43_47_4f_6f_62_e5"
      | "device_tracker.40_fd_82_29_ed_e3"
      | "device_tracker.7c_28_b4_5a_49_90"
      | "device_tracker.74_50_da_b5_76_f8"
      | "device_tracker.43_44_e7_97_5c_48"
      | "device_tracker.73_7c_1b_6d_91_f1"
      | "device_tracker.64_bc_ee_da_dc_61"
      | "device_tracker.le_onyx_26"
      | "device_tracker.6f_bb_d9_d8_27_3f"
      | "device_tracker.5d_bc_bd_81_6c_ce"
      | "device_tracker.le_onyx_27"
      | "device_tracker.79_ac_7a_b6_34_8f"
      | "device_tracker.69_ff_51_3d_67_3d"
      | "device_tracker.6a_7c_0e_18_81_9c"
      | "device_tracker.6b_04_93_b7_1c_a3"
      | "device_tracker.55_e9_fe_36_45_1b"
      | "device_tracker.4c_a6_a5_9a_43_c4"
      | "device_tracker.63_fd_ca_75_c2_53"
      | "device_tracker.48_20_74_bd_71_8c"
      | "device_tracker.7e_cc_2b_39_cf_b1"
      | "device_tracker.76_f0_83_ea_f2_10"
      | "device_tracker.55_35_89_bf_0c_7e"
      | "device_tracker.10_ce_90_0f_61_0d"
      | "device_tracker.4d_ad_99_3d_97_12"
      | "device_tracker.7b_c9_d7_15_fb_b2"
      | "device_tracker.le_onyx_28"
      | "device_tracker.40_34_5c_6e_5d_34"
      | "device_tracker.74_83_a0_53_49_18"
      | "device_tracker.le_onyx_29"
      | "device_tracker.4c_f2_1e_c6_bc_43"
      | "device_tracker.le_onyx_30"
      | "device_tracker.le_onyx_31"
      | "device_tracker.7d_4a_59_d2_d9_66"
      | "device_tracker.le_onyx_32"
      | "device_tracker.le_onyx_33"
      | "device_tracker.4d_9a_fe_7f_2e_02"
      | "device_tracker.72_be_7a_a7_44_2f"
      | "device_tracker.48_68_b9_f0_53_87"
      | "device_tracker.58_fb_56_5a_23_35"
      | "device_tracker.le_onyx_34"
      | "device_tracker.44_33_e6_e7_44_7c"
      | "device_tracker.5d_aa_47_5c_ea_74"
      | "device_tracker.71_0d_5c_e2_de_2d"
      | "device_tracker.66_7a_79_79_33_47"
      | "device_tracker.69_32_10_97_ea_97"
      | "device_tracker.le_onyx_35"
      | "device_tracker.72_d0_28_75_ca_4f"
      | "device_tracker.le_onyx_36"
      | "device_tracker.le_onyx_37"
      | "device_tracker.6d_f7_fa_c1_ef_e2"
      | "device_tracker.7b_e8_a1_30_a6_ba"
      | "device_tracker.53_54_12_7b_a3_93"
      | "device_tracker.43_ee_f4_1e_65_ec"
      | "device_tracker.le_onyx_38"
      | "device_tracker.26_ae_70_54_57_f4"
      | "device_tracker.69_d6_e9_b3_77_69"
      | "device_tracker.49_f0_a2_86_a1_70"
      | "device_tracker.66_bf_fb_ba_b3_9f"
      | "device_tracker.4f_2b_6e_a7_b5_f6"
      | "device_tracker.le_onyx_39"
      | "device_tracker.7c_55_07_18_42_71"
      | "device_tracker.53_0a_01_9c_be_93"
      | "device_tracker.le_onyx_40"
      | "device_tracker.le_onyx_41"
      | "device_tracker.5a_85_05_cd_6f_25"
      | "device_tracker.53_e4_cc_25_5d_85"
      | "device_tracker.le_onyx_42"
      | "device_tracker.le_onyx_43"
      | "device_tracker.le_onyx_44"
      | "device_tracker.61_d8_a7_97_e5_d7"
      | "device_tracker.41_ff_81_ee_6d_a1"
      | "device_tracker.le_onyx_45"
      | "device_tracker.le_onyx_46"
      | "device_tracker.53_ff_d3_84_91_b0"
      | "device_tracker.le_onyx_47"
      | "device_tracker.44_e1_5c_95_b3_bc"
      | "device_tracker.69_06_20_46_f5_fe"
      | "device_tracker.4f_c2_19_52_9a_1d"
      | "device_tracker.7b_7c_d9_3c_53_31"
      | "device_tracker.7f_6b_c9_d6_a8_ea"
      | "device_tracker.7d_26_09_f0_06_28"
      | "device_tracker.le_onyx_48"
      | "device_tracker.51_1a_9f_ac_7a_45"
      | "device_tracker.54_0c_93_b0_bf_11"
      | "device_tracker.le_onyx_49"
      | "device_tracker.72_31_17_03_b3_d6"
      | "device_tracker.4f_e7_c0_8c_22_43"
      | "device_tracker.47_c9_95_a9_12_9a"
      | "device_tracker.le_onyx_50"
      | "device_tracker.6e_ce_ca_a4_d0_8a"
      | "device_tracker.4e_63_58_85_86_13"
      | "device_tracker.le_onyx_51"
      | "device_tracker.22_d5_50_54_48_e7"
      | "device_tracker.le_onyx_52"
      | "device_tracker.5f_9e_c9_b3_a2_76"
      | "device_tracker.4d_69_96_94_09_cb"
      | "device_tracker.49_1d_ad_c9_ed_8f"
      | "device_tracker.le_onyx_53"
      | "device_tracker.78_82_4d_2b_6c_29"
      | "device_tracker.7f_4e_57_6d_6d_50"
      | "device_tracker.56_ca_e4_9b_f2_e4"
      | "device_tracker.le_onyx_54"
      | "device_tracker.5d_09_03_63_30_31"
      | "device_tracker.5c_7c_91_d7_ee_65"
      | "device_tracker.40_07_bb_ea_e8_b8"
      | "device_tracker.4b_a6_10_7b_c5_db"
      | "device_tracker.4b_52_c1_20_92_c2"
      | "device_tracker.le_onyx_55"
      | "device_tracker.le_onyx_56"
      | "device_tracker.40_0e_a9_4e_91_e2"
      | "device_tracker.le_onyx_57"
      | "device_tracker.le_onyx_58"
      | "device_tracker.6c_62_3d_5c_96_9c"
      | "device_tracker.le_onyx_59"
      | "device_tracker.5c_ab_28_df_b7_19"
      | "device_tracker.79_82_f2_f0_85_ef"
      | "device_tracker.5f_1c_5f_95_0e_b8"
      | "device_tracker.7a_6a_c0_4d_fe_bf"
      | "device_tracker.le_onyx_60"
      | "device_tracker.4a_35_aa_8a_df_f9"
      | "device_tracker.60_ec_08_15_60_0d"
      | "device_tracker.70_fd_d7_f1_3a_75"
      | "device_tracker.1c_9a_88_38_73_72"
      | "device_tracker.54_48_bb_3a_3c_8f"
      | "device_tracker.52_bb_d8_91_26_69"
      | "device_tracker.65_e5_19_75_71_53"
      | "device_tracker.58_e9_5a_66_39_b5"
      | "device_tracker.59_ad_22_28_0d_f3"
      | "device_tracker.63_f5_3a_a6_0c_48"
      | "device_tracker.54_75_b2_cf_3e_2a"
      | "device_tracker.56_7f_65_d9_20_f7"
      | "device_tracker.45_9e_f5_37_0e_34"
      | "device_tracker.62_26_a4_24_5a_a1"
      | "device_tracker.45_65_95_fb_33_ed"
      | "device_tracker.2c_57_12_10_75_3b"
      | "device_tracker.6a_19_c0_dc_ce_a3"
      | "device_tracker.77_21_d9_99_b9_6d"
      | "device_tracker.5e_a5_4a_fd_ea_03"
      | "device_tracker.74_43_a2_58_20_8f"
      | "device_tracker.7c_44_9b_aa_d4_ee"
      | "device_tracker.64_d9_4e_20_b6_75"
      | "device_tracker.5a_98_f9_93_4e_77"
      | "device_tracker.6b_0a_99_39_c3_11"
      | "device_tracker.0b_56_4d_30_33_e4"
      | "device_tracker.77_32_c8_78_18_1c"
      | "device_tracker.73_8f_f5_cb_a7_b5"
      | "device_tracker.59_63_15_6c_af_0c"
      | "device_tracker.5d_b4_e0_a6_d9_81"
      | "device_tracker.le_onyx_61"
      | "device_tracker.75_47_44_3a_75_93"
      | "device_tracker.78_8b_d2_3a_10_bb"
      | "device_tracker.45_35_ed_da_67_8b"
      | "device_tracker.55_49_07_4e_34_4c"
      | "device_tracker.69_12_96_21_e6_20"
      | "device_tracker.79_7e_e0_f0_be_4f"
      | "device_tracker.57_21_64_40_68_b0"
      | "device_tracker.45_f2_40_83_bb_65"
      | "device_tracker.57_15_68_97_b2_29"
      | "device_tracker.5a_e4_25_25_c7_06"
      | "device_tracker.77_04_3d_58_a7_30"
      | "device_tracker.4f_22_f9_78_28_b3"
      | "device_tracker.65_9d_1d_4d_39_18"
      | "device_tracker.1c_63_f7_42_27_b2"
      | "device_tracker.7c_d1_80_bf_3d_c9"
      | "device_tracker.6e_fd_20_0a_4e_ee"
      | "device_tracker.63_a0_a3_f5_24_04"
      | "device_tracker.60_bc_2f_39_66_2d"
      | "device_tracker.55_98_19_30_be_13"
      | "device_tracker.6f_3e_c6_9e_95_42"
      | "device_tracker.71_49_15_d3_f8_58"
      | "device_tracker.79_3b_4f_52_df_e8"
      | "device_tracker.76_2a_a4_12_ac_82"
      | "device_tracker.6b_4a_87_e6_dc_ae"
      | "device_tracker.32_53_11_1a_7c_03"
      | "device_tracker.le_onyx_62"
      | "device_tracker.48_3e_0d_fb_d1_18"
      | "device_tracker.53_c2_b9_b7_5c_d5"
      | "device_tracker.4b_50_71_62_66_f6"
      | "device_tracker.5f_8f_c7_5a_ff_86"
      | "device_tracker.52_70_01_dc_86_5c"
      | "device_tracker.6b_02_53_c2_36_5f"
      | "device_tracker.4f_1c_3a_b5_3d_10"
      | "device_tracker.53_5f_d8_f4_75_97"
      | "device_tracker.23_ac_77_8a_17_6d"
      | "device_tracker.4f_10_83_50_a8_03"
      | "device_tracker.6f_d6_4a_63_ac_e8"
      | "device_tracker.61_88_dc_79_dd_27"
      | "device_tracker.59_19_22_27_6e_87"
      | "device_tracker.7e_00_50_87_a0_4b"
      | "device_tracker.67_f3_a9_40_fe_07"
      | "device_tracker.15_91_7c_93_81_95"
      | "device_tracker.6c_dd_c5_62_39_ea"
      | "device_tracker.50_4e_c1_b8_e2_7d"
      | "device_tracker.7f_be_2a_5b_65_a5"
      | "device_tracker.le_onyx_63"
      | "device_tracker.7f_3b_f7_d7_8c_71"
      | "device_tracker.62_5d_a8_4f_79_48"
      | "device_tracker.54_a1_b8_5c_3b_e5"
      | "device_tracker.5f_3e_b0_ef_2a_c9"
      | "device_tracker.57_1a_1c_fe_ab_34"
      | "device_tracker.67_12_e8_69_50_72"
      | "device_tracker.4b_f9_c1_0a_75_d0"
      | "device_tracker.68_de_f6_46_ae_d1"
      | "device_tracker.43_9b_57_6e_19_fb"
      | "device_tracker.55_1e_5b_1e_6f_db"
      | "device_tracker.22_1e_c6_5d_37_be"
      | "device_tracker.67_38_b7_b1_ed_8b"
      | "device_tracker.5e_31_cb_ee_a9_9d"
      | "device_tracker.41_51_ff_d6_03_1c"
      | "device_tracker.63_fe_5c_ce_82_04"
      | "device_tracker.75_dc_dd_b2_96_de"
      | "device_tracker.43_a2_f7_64_79_41"
      | "device_tracker.3d_7d_d1_52_cc_d9"
      | "device_tracker.42_83_83_e8_85_9a"
      | "device_tracker.59_a7_18_58_bf_67"
      | "device_tracker.5e_e5_8d_21_41_70"
      | "device_tracker.5e_a5_e1_66_ba_8d"
      | "device_tracker.76_40_9b_9b_d2_73"
      | "device_tracker.64_7f_92_d7_96_f9"
      | "device_tracker.63_60_ef_f0_e0_e7"
      | "device_tracker.51_ba_6f_20_d3_70"
      | "device_tracker.6f_24_b9_b0_a4_2e"
      | "device_tracker.7b_61_15_e3_ed_a4"
      | "device_tracker.0c_33_24_67_fe_f8"
      | "device_tracker.53_98_85_14_92_8d"
      | "device_tracker.53_12_f2_0a_16_ab"
      | "device_tracker.68_9f_04_6e_fe_ea"
      | "device_tracker.75_82_59_51_d9_d0"
      | "device_tracker.23_e8_b8_bc_f4_9c"
      | "device_tracker.4c_d4_40_d2_28_6f"
      | "device_tracker.54_ff_09_a0_f5_d6"
      | "device_tracker.73_e3_89_04_da_72"
      | "device_tracker.7b_3a_3a_e0_64_fa"
      | "device_tracker.6e_55_32_7b_f1_94"
      | "device_tracker.60_6b_4b_56_6a_9d"
      | "device_tracker.45_b1_eb_79_14_84"
      | "device_tracker.42_a8_c0_60_8b_4d"
      | "device_tracker.4b_66_9e_53_fa_c3"
      | "device_tracker.48_58_a1_df_88_2e"
      | "device_tracker.78_c8_07_0a_bf_1f"
      | "device_tracker.46_36_d0_ca_88_0e"
      | "device_tracker.7a_a4_f1_7b_1c_b7"
      | "device_tracker.4a_ee_7f_2a_a4_c9"
      | "device_tracker.42_9a_36_c4_0f_5e"
      | "device_tracker.79_8d_17_1c_50_67"
      | "device_tracker.75_b5_35_0b_3c_35"
      | "device_tracker.57_3c_09_ef_f6_aa"
      | "device_tracker.72_fb_60_43_f7_69"
      | "device_tracker.41_36_b7_8d_d7_f3"
      | "device_tracker.72_9b_c9_3c_81_4e"
      | "device_tracker.71_7d_40_2c_45_3d"
      | "device_tracker.56_ef_02_cc_0a_e0"
      | "device_tracker.5d_63_5c_52_14_2d"
      | "device_tracker.59_a1_7d_8f_d1_88"
      | "device_tracker.56_07_4f_fa_a7_24"
      | "device_tracker.7d_5c_d5_37_bb_e4"
      | "device_tracker.66_d7_14_d7_bc_7e"
      | "device_tracker.5b_31_15_fe_20_50"
      | "device_tracker.79_44_f4_a8_d1_0b"
      | "device_tracker.5c_c8_37_fa_08_54"
      | "device_tracker.62_72_5f_fb_7d_9a"
      | "device_tracker.5a_94_5a_b7_aa_9c"
      | "device_tracker.5d_cb_fb_af_02_e7"
      | "device_tracker.6c_c7_72_44_67_4b"
      | "device_tracker.4e_85_3c_3d_b9_05"
      | "device_tracker.6e_76_2c_c8_b2_9d"
      | "device_tracker.47_37_ff_36_4b_74"
      | "device_tracker.7b_32_c6_75_bf_10"
      | "device_tracker.68_69_e8_9f_42_b1"
      | "device_tracker.59_c9_2d_59_7b_99"
      | "device_tracker.5e_fb_57_6a_9d_8a"
      | "device_tracker.74_2f_1f_8a_9e_de"
      | "device_tracker.5d_fe_c3_28_00_bf"
      | "device_tracker.46_ef_1f_2a_a6_d3"
      | "device_tracker.63_52_53_f7_89_e1"
      | "device_tracker.50_1c_c5_00_84_46"
      | "device_tracker.71_ab_2b_11_c6_5f"
      | "device_tracker.52_46_e0_4d_5d_8c"
      | "device_tracker.40_dd_33_d1_7e_49"
      | "device_tracker.7b_60_4d_5f_e4_4a"
      | "device_tracker.55_40_0a_40_b8_9b"
      | "device_tracker.69_03_6f_f1_33_e3"
      | "device_tracker.7a_ff_46_d2_cd_18"
      | "device_tracker.57_98_7f_44_43_22"
      | "device_tracker.6c_99_a5_a4_49_f2"
      | "device_tracker.63_e3_d5_20_20_a1"
      | "device_tracker.63_3a_e0_6e_aa_6c"
      | "device_tracker.72_b3_13_f1_47_5e"
      | "device_tracker.48_6d_c8_d6_65_c2"
      | "device_tracker.7c_53_24_ab_64_4a"
      | "device_tracker.48_49_29_e2_db_84"
      | "device_tracker.62_ef_10_48_ce_04"
      | "device_tracker.70_b8_5c_b7_01_d5"
      | "device_tracker.5f_c4_d6_6e_3f_41"
      | "device_tracker.66_b1_11_a7_8d_cd"
      | "device_tracker.62_1b_b9_04_de_5b"
      | "device_tracker.40_2b_3e_89_f9_43"
      | "device_tracker.59_5e_21_5b_e2_a9"
      | "device_tracker.73_5f_9f_8d_22_3a"
      | "device_tracker.68_50_21_a9_0e_c8"
      | "device_tracker.79_dc_2e_88_ec_c2"
      | "device_tracker.77_c4_5d_bc_f3_17"
      | "device_tracker.78_e1_ed_af_d2_90"
      | "device_tracker.4f_01_e6_d6_53_43"
      | "device_tracker.5d_fd_ed_59_a5_f3"
      | "device_tracker.77_56_88_0c_b7_11"
      | "device_tracker.75_1a_be_c0_a8_e0"
      | "device_tracker.43_06_44_cd_d0_e4"
      | "device_tracker.45_dd_b1_45_eb_48"
      | "device_tracker.7b_72_f6_6c_99_f1"
      | "device_tracker.7d_28_4e_8d_b6_27"
      | "device_tracker.58_cc_a6_0a_cd_8c"
      | "device_tracker.59_84_0e_74_3c_e8"
      | "device_tracker.41_e5_9a_0b_5e_a0"
      | "device_tracker.6c_93_ea_0f_4d_01"
      | "device_tracker.70_e3_ca_68_b0_1c"
      | "device_tracker.7c_71_d7_16_75_51"
      | "device_tracker.59_9e_fd_d1_27_e6"
      | "device_tracker.63_5e_20_b0_b4_0d"
      | "device_tracker.7b_80_b0_c4_6d_79"
      | "device_tracker.7d_bc_7d_83_06_53"
      | "device_tracker.47_78_ff_f9_6d_54"
      | "device_tracker.43_bd_e2_10_a7_61"
      | "device_tracker.57_6a_c3_e8_c6_4a"
      | "device_tracker.6f_c3_95_ef_83_01"
      | "device_tracker.58_a0_d9_bb_71_86"
      | "device_tracker.5c_84_e1_25_e0_85"
      | "device_tracker.58_76_2c_79_d8_a7"
      | "device_tracker.68_59_e1_1b_2b_6b"
      | "device_tracker.7d_0b_5e_c1_f5_d2"
      | "device_tracker.55_43_ef_66_a3_48"
      | "device_tracker.4e_02_93_ce_68_f1"
      | "device_tracker.46_5e_f7_d2_bd_aa"
      | "device_tracker.5a_9f_1d_0d_b7_44"
      | "device_tracker.56_8b_25_b8_a0_41"
      | "device_tracker.6e_7a_f0_a5_47_61"
      | "device_tracker.68_46_31_c8_9e_dc"
      | "device_tracker.48_9b_1a_e6_d5_d6"
      | "device_tracker.6c_4e_4c_27_cf_e6"
      | "device_tracker.77_f2_50_a9_43_55"
      | "device_tracker.71_40_f8_e4_a3_d2"
      | "device_tracker.57_12_70_fd_62_48"
      | "device_tracker.4e_06_e2_9e_79_4c"
      | "device_tracker.76_8e_ab_d8_1b_ca"
      | "device_tracker.6a_2e_2c_6b_98_b2"
      | "device_tracker.6e_b5_4a_59_14_a3"
      | "device_tracker.64_aa_2d_5f_68_27"
      | "device_tracker.51_c0_a9_31_1f_dc"
      | "device_tracker.57_f5_24_cc_8c_03"
      | "device_tracker.77_02_78_d4_06_9a"
      | "device_tracker.76_02_b8_54_dc_bf"
      | "device_tracker.79_69_81_c6_28_ca"
      | "device_tracker.4c_18_d2_73_fc_d4"
      | "device_tracker.52_b4_b7_31_6b_b2"
      | "device_tracker.75_a7_ee_2e_a4_5a"
      | "device_tracker.58_6e_77_de_41_a0"
      | "device_tracker.4d_fa_81_8e_87_59"
      | "device_tracker.5f_50_d7_33_6d_92"
      | "device_tracker.7f_a0_af_c8_1e_96"
      | "device_tracker.51_54_b6_5c_48_d6"
      | "device_tracker.60_d4_26_8a_6c_7d"
      | "device_tracker.66_ee_4a_01_71_81"
      | "device_tracker.63_d9_d2_06_57_ec"
      | "device_tracker.4b_44_65_be_cb_e2"
      | "device_tracker.67_49_5e_dc_02_16"
      | "device_tracker.4a_23_59_3c_83_4f"
      | "device_tracker.73_ca_96_42_51_a9"
      | "device_tracker.63_e2_62_bf_12_f9"
      | "device_tracker.52_09_01_bb_76_15"
      | "device_tracker.46_f9_c6_67_3c_89"
      | "device_tracker.41_03_ce_68_6a_2a"
      | "device_tracker.7b_8e_41_4e_9c_1f"
      | "device_tracker.5a_7a_8a_b5_39_34"
      | "device_tracker.77_fa_9f_1a_81_3f"
      | "device_tracker.4a_dd_47_94_99_65"
      | "device_tracker.4c_9a_a4_32_7b_ef"
      | "device_tracker.57_d8_1f_83_be_91"
      | "device_tracker.69_84_12_66_7d_72"
      | "device_tracker.75_99_cf_6c_fd_19"
      | "device_tracker.53_78_8d_24_14_78"
      | "device_tracker.59_fb_0c_93_47_3f"
      | "device_tracker.67_bc_5f_1e_13_81"
      | "device_tracker.7e_0a_f0_28_bb_74"
      | "device_tracker.4e_82_84_3b_47_ed"
      | "device_tracker.4c_4e_6f_0d_de_7d"
      | "device_tracker.79_5f_6c_f1_23_08"
      | "device_tracker.76_8d_b0_3c_b0_16"
      | "device_tracker.41_15_ff_20_8b_16"
      | "device_tracker.72_bc_7b_71_af_46"
      | "device_tracker.59_c8_60_b4_f4_34"
      | "device_tracker.4d_a2_ef_cb_57_6e"
      | "device_tracker.52_2a_56_63_da_1d"
      | "device_tracker.smart_tag_173"
      | "device_tracker.42_e0_91_d3_a4_09"
      | "device_tracker.5e_28_73_0d_84_ea"
      | "device_tracker.50_0d_63_06_cb_86"
      | "device_tracker.72_9b_ef_88_f9_6c"
      | "device_tracker.smart_tag_174"
      | "device_tracker.48_c1_a5_32_c4_12"
      | "device_tracker.7d_dc_8c_c8_a9_03"
      | "device_tracker.7d_79_db_d5_e7_0f"
      | "device_tracker.78_2b_42_e2_fd_3f"
      | "device_tracker.4d_e4_b0_59_c7_e7"
      | "device_tracker.45_87_86_71_8e_8d"
      | "device_tracker.smart_tag_175"
      | "device_tracker.6c_54_70_5e_e9_27"
      | "device_tracker.75_5b_09_7f_ba_c9"
      | "device_tracker.73_ed_a5_4c_0d_b5"
      | "device_tracker.4c_71_9d_b4_9f_94"
      | "device_tracker.55_87_2e_1e_d7_a3"
      | "device_tracker.74_1b_ec_21_bb_8f"
      | "device_tracker.44_a5_f5_ac_3d_3a"
      | "device_tracker.5f_c7_0b_21_28_11"
      | "device_tracker.smart_tag_176"
      | "device_tracker.5d_61_ff_15_72_c2"
      | "device_tracker.62_7f_d1_83_7e_ff"
      | "device_tracker.48_55_7b_26_22_30"
      | "device_tracker.50_79_cd_36_7f_1b"
      | "device_tracker.53_c5_ee_95_a6_db"
      | "device_tracker.4f_de_76_1b_61_22"
      | "device_tracker.smart_tag_177"
      | "device_tracker.45_0e_ab_a1_85_25"
      | "device_tracker.57_a7_3f_ac_dd_c1"
      | "device_tracker.7f_be_de_8d_97_b7"
      | "device_tracker.79_6d_87_da_84_73"
      | "device_tracker.smart_tag_178"
      | "device_tracker.7a_15_02_bd_64_17"
      | "device_tracker.7d_74_10_a6_2b_cb"
      | "device_tracker.69_af_ec_97_6b_40"
      | "device_tracker.6c_57_ea_cc_29_80"
      | "device_tracker.7c_be_1f_6d_03_ef"
      | "device_tracker.49_4f_b4_d3_fd_49"
      | "device_tracker.41_bb_86_f9_55_1d"
      | "device_tracker.smart_tag_179"
      | "device_tracker.62_10_27_d2_4e_87"
      | "device_tracker.7b_dd_ce_42_d2_b4"
      | "device_tracker.56_cd_c0_16_4e_2b"
      | "device_tracker.46_98_77_7f_21_77"
      | "device_tracker.63_7a_56_c9_fb_58"
      | "device_tracker.smart_tag_180"
      | "device_tracker.7b_00_dd_12_ea_f3"
      | "device_tracker.40_57_bb_7a_0b_f9"
      | "device_tracker.65_1a_a5_79_29_58"
      | "device_tracker.49_fc_81_fb_5a_99"
      | "device_tracker.60_80_f7_1e_e2_ee"
      | "device_tracker.70_bf_ee_79_35_60"
      | "device_tracker.51_4e_a1_9a_85_97"
      | "device_tracker.73_24_af_67_b8_a2"
      | "device_tracker.55_d1_d3_6e_7b_f0"
      | "device_tracker.7e_43_92_7b_92_1c"
      | "device_tracker.4a_11_e2_08_f2_04"
      | "device_tracker.5c_d7_d2_4e_a4_55"
      | "device_tracker.50_38_fb_d9_b9_af"
      | "device_tracker.7c_70_b6_16_7b_cb"
      | "device_tracker.smart_tag_181"
      | "device_tracker.53_ee_d0_5f_4f_ff"
      | "device_tracker.62_b7_3d_e5_ae_92"
      | "device_tracker.55_17_b6_76_cd_f4"
      | "device_tracker.6f_3a_50_88_e9_47"
      | "device_tracker.60_47_70_40_4a_16"
      | "device_tracker.smart_tag_182"
      | "device_tracker.50_4f_a0_47_87_b7"
      | "device_tracker.53_81_68_a1_9e_84"
      | "device_tracker.67_4e_9a_72_23_71"
      | "device_tracker.6d_ae_0f_7a_29_59"
      | "device_tracker.7c_9b_08_e1_3d_b7"
      | "device_tracker.43_e0_f1_d3_7e_7b"
      | "device_tracker.smart_tag_183"
      | "device_tracker.6b_3d_7a_0a_a1_6f"
      | "device_tracker.69_5c_86_5e_77_5a"
      | "device_tracker.66_cc_59_84_10_17"
      | "device_tracker.58_b2_e7_f9_3e_9d"
      | "device_tracker.46_ec_f9_19_f4_4d"
      | "device_tracker.smart_tag_184"
      | "device_tracker.77_78_ff_8a_92_76"
      | "device_tracker.48_4d_00_b1_89_0d"
      | "device_tracker.6e_fb_11_6a_f4_a1"
      | "device_tracker.5f_53_95_6e_74_77"
      | "device_tracker.7b_92_46_d1_1d_c5"
      | "device_tracker.73_36_14_ff_f6_35"
      | "device_tracker.5f_cc_25_1f_51_b7"
      | "device_tracker.smart_tag_185"
      | "device_tracker.7e_75_50_e7_69_84"
      | "device_tracker.60_b9_55_ee_ac_53"
      | "device_tracker.49_1e_55_fc_70_fd"
      | "device_tracker.5d_27_ba_50_d2_26"
      | "device_tracker.5c_a5_f7_42_ae_64"
      | "device_tracker.smart_tag_186"
      | "device_tracker.45_c7_a6_97_44_b4"
      | "device_tracker.52_69_d4_06_b4_4f"
      | "device_tracker.6f_5e_26_2c_d2_7b"
      | "device_tracker.73_09_74_87_e3_1f"
      | "device_tracker.68_0d_df_fe_54_b1"
      | "device_tracker.47_cc_29_3f_91_df"
      | "device_tracker.smart_tag_187"
      | "device_tracker.72_f9_9c_fc_6d_97"
      | "device_tracker.62_f8_75_9f_8c_c4"
      | "device_tracker.42_c5_e6_e9_16_13"
      | "device_tracker.6e_7e_76_86_f1_16"
      | "device_tracker.smart_tag_188"
      | "device_tracker.4e_eb_39_2b_ca_05"
      | "device_tracker.54_2f_9a_b7_50_d5"
      | "device_tracker.44_b0_aa_d5_07_a7"
      | "device_tracker.7b_1f_2d_ad_2e_43"
      | "device_tracker.77_64_0d_d8_58_83"
      | "device_tracker.4f_d4_59_dc_c7_be"
      | "device_tracker.74_73_70_cc_36_c4"
      | "device_tracker.smart_tag_189"
      | "device_tracker.7f_c6_09_39_d8_7e"
      | "device_tracker.44_da_95_80_a2_42"
      | "device_tracker.5b_76_a7_38_f4_65"
      | "device_tracker.61_f8_b4_a3_0d_4b"
      | "device_tracker.70_eb_c6_90_98_9e"
      | "device_tracker.7a_7e_dc_62_36_bc"
      | "device_tracker.69_31_2d_be_a5_ac"
      | "device_tracker.smart_tag_190"
      | "device_tracker.43_fa_a6_fc_48_14"
      | "device_tracker.5f_45_f3_27_dd_fd"
      | "device_tracker.5c_79_92_7e_4a_54"
      | "device_tracker.62_4f_d9_01_e9_bf"
      | "device_tracker.79_8f_74_10_99_9d"
      | "device_tracker.49_2a_7b_19_83_31"
      | "device_tracker.74_47_7e_ef_05_99"
      | "device_tracker.smart_tag_191"
      | "device_tracker.7c_c6_ca_48_ee_5b"
      | "device_tracker.77_a1_35_b3_1b_cb"
      | "device_tracker.68_28_48_c7_79_6f"
      | "device_tracker.78_7f_3c_d0_a0_53"
      | "device_tracker.63_5d_a2_a6_c2_9a"
      | "device_tracker.67_c0_b3_a1_13_5f"
      | "device_tracker.5f_31_b3_2a_be_04"
      | "device_tracker.smart_tag_192"
      | "device_tracker.45_df_b2_18_f7_2e"
      | "device_tracker.60_f5_16_7e_37_ae"
      | "device_tracker.78_0c_d6_f3_e2_c0"
      | "device_tracker.68_e1_25_7c_44_25"
      | "device_tracker.6f_57_4b_9a_69_13"
      | "device_tracker.6e_74_f9_d1_0c_1e"
      | "device_tracker.71_00_0a_7d_36_ef"
      | "device_tracker.47_74_ed_53_29_5e"
      | "device_tracker.smart_tag_193"
      | "device_tracker.68_02_d7_bf_eb_1f"
      | "device_tracker.77_dd_28_08_63_e1"
      | "device_tracker.54_cf_82_95_5e_b0"
      | "device_tracker.4e_92_7c_d0_0f_20"
      | "device_tracker.56_67_8b_d1_ea_66"
      | "device_tracker.smart_tag_194"
      | "device_tracker.46_d6_e1_09_16_e7"
      | "device_tracker.5d_7a_e9_47_40_19"
      | "device_tracker.7d_9a_09_c0_3d_a9"
      | "device_tracker.68_c1_95_e2_cd_ac"
      | "device_tracker.62_85_76_be_1e_13"
      | "device_tracker.4a_c0_05_46_c5_88"
      | "device_tracker.68_e5_a3_cc_33_10"
      | "device_tracker.smart_tag_195"
      | "device_tracker.4c_65_2a_77_f2_e4"
      | "device_tracker.51_f0_5f_e4_ef_f6"
      | "device_tracker.75_38_5e_25_24_38"
      | "device_tracker.41_c5_27_93_e3_66"
      | "device_tracker.7b_45_3a_69_fa_20"
      | "device_tracker.75_0f_12_22_98_6e"
      | "device_tracker.smart_tag_196"
      | "device_tracker.6a_46_50_80_f4_23"
      | "device_tracker.60_0d_12_40_b7_71"
      | "device_tracker.51_06_cd_7a_14_9f"
      | "device_tracker.6b_44_04_b9_ca_ed"
      | "device_tracker.58_0b_82_f1_2e_60"
      | "device_tracker.56_6e_32_6a_4f_27"
      | "device_tracker.61_2f_c8_25_51_60"
      | "device_tracker.56_9e_ba_61_56_a0"
      | "device_tracker.smart_tag_197"
      | "device_tracker.4b_6f_9e_9f_2c_cf"
      | "device_tracker.62_99_64_2f_24_2e"
      | "device_tracker.5c_79_8b_12_32_93"
      | "device_tracker.42_7d_c2_9d_00_a6"
      | "device_tracker.49_03_e6_b4_6e_ee"
      | "device_tracker.smart_tag_198"
      | "device_tracker.45_57_c9_b3_76_4f"
      | "device_tracker.7c_c9_2a_ad_1e_97"
      | "device_tracker.58_99_39_5d_6f_c0"
      | "device_tracker.76_f6_f6_4b_0b_6f"
      | "device_tracker.55_46_4f_2d_ba_36"
      | "device_tracker.78_9e_6d_bd_5e_85"
      | "device_tracker.72_4e_90_ed_60_9d"
      | "device_tracker.58_0a_a3_9d_fb_d2"
      | "device_tracker.4f_98_b3_1d_0a_6d"
      | "device_tracker.smart_tag_199"
      | "device_tracker.4c_f9_a5_43_35_61"
      | "device_tracker.64_f5_58_af_ef_85"
      | "device_tracker.7d_58_ca_62_f8_86"
      | "device_tracker.7b_fc_3f_c9_4f_39"
      | "device_tracker.6c_c0_56_1f_94_00"
      | "device_tracker.50_89_85_00_b8_3a"
      | "device_tracker.57_17_17_94_d1_c4"
      | "device_tracker.smart_tag_200"
      | "device_tracker.77_ab_37_a2_6e_2f"
      | "device_tracker.75_75_75_c6_5e_77"
      | "device_tracker.5c_fc_ec_f1_a4_9e"
      | "device_tracker.43_83_83_44_20_4d"
      | "device_tracker.6b_ec_0f_88_cd_93"
      | "device_tracker.smart_tag_201"
      | "device_tracker.73_d5_cc_c3_23_87"
      | "device_tracker.57_cb_05_82_32_20"
      | "device_tracker.7b_e7_29_5e_22_c1"
      | "device_tracker.smart_tag_202"
      | "device_tracker.45_6a_f3_d3_74_91"
      | "device_tracker.52_78_9f_95_9e_4b"
      | "device_tracker.56_80_ab_39_d4_86"
      | "device_tracker.45_31_6b_98_a9_43"
      | "device_tracker.54_99_5f_8a_af_55"
      | "device_tracker.64_b5_9d_c4_2a_5f"
      | "device_tracker.4e_87_03_d6_41_55"
      | "device_tracker.70_f5_17_ee_26_4f"
      | "device_tracker.smart_tag_203"
      | "device_tracker.4b_0b_e3_99_5c_4b"
      | "device_tracker.4e_4e_4e_64_c6_63"
      | "device_tracker.43_2b_01_d1_b3_7f"
      | "device_tracker.70_bb_1e_b1_dd_98"
      | "device_tracker.55_49_a7_92_66_66"
      | "device_tracker.5f_3b_c9_52_50_c3"
      | "device_tracker.58_58_18_ce_b6_6e"
      | "device_tracker.smart_tag_204"
      | "device_tracker.4f_26_bb_b9_79_f4"
      | "device_tracker.47_07_07_80_63_74"
      | "device_tracker.7e_8a_d0_da_0e_09"
      | "device_tracker.50_d1_11_30_c2_0d"
      | "device_tracker.61_5e_53_6f_6b_e1"
      | "device_tracker.5a_3f_4d_78_78_15"
      | "device_tracker.63_23_83_58_f5_84"
      | "device_tracker.46_98_d7_a6_69_20"
      | "device_tracker.smart_tag_205"
      | "device_tracker.71_9f_59_ab_d2_88"
      | "device_tracker.73_3c_3b_5e_66_46"
      | "device_tracker.51_cd_43_9e_8b_14"
      | "device_tracker.65_ff_52_2c_e3_5f"
      | "device_tracker.6a_0d_fe_a3_0d_a6"
      | "device_tracker.smart_tag_206"
      | "device_tracker.6d_65_67_bd_d6_6a"
      | "device_tracker.5f_03_1b_6c_5b_4d"
      | "device_tracker.71_af_60_61_f3_64"
      | "device_tracker.7e_9c_cd_c0_9a_33"
      | "device_tracker.5f_13_f5_01_2a_28"
      | "device_tracker.6f_30_3f_ad_a6_24"
      | "device_tracker.smart_tag_207"
      | "device_tracker.54_5c_4b_ab_f6_2b"
      | "device_tracker.7d_29_83_83_e6_6a"
      | "device_tracker.53_22_81_53_f8_b4"
      | "device_tracker.4d_f1_cf_64_fb_75"
      | "device_tracker.4d_ed_3d_e8_83_73"
      | "device_tracker.5f_2f_d7_c4_25_43"
      | "device_tracker.79_02_3f_dd_2d_a4"
      | "device_tracker.smart_tag_208"
      | "device_tracker.56_40_07_1f_88_0b"
      | "device_tracker.79_64_8a_98_e6_e0"
      | "device_tracker.5e_d8_db_83_b2_dc"
      | "device_tracker.71_a8_04_33_17_34"
      | "device_tracker.46_21_97_43_c7_b9"
      | "device_tracker.55_fa_4d_6b_b4_1c"
      | "device_tracker.59_2b_d2_97_4d_18"
      | "device_tracker.smart_tag_209"
      | "device_tracker.6b_75_eb_94_b4_87"
      | "device_tracker.49_95_5b_84_5e_76"
      | "device_tracker.40_e1_d1_26_d0_6c"
      | "device_tracker.4c_a7_92_b7_26_d3"
      | "device_tracker.78_b8_18_88_c2_31"
      | "device_tracker.63_27_25_c8_92_cb"
      | "device_tracker.smart_tag_210"
      | "device_tracker.6f_84_6e_a2_d5_2d"
      | "device_tracker.41_2f_2b_c4_20_1d"
      | "device_tracker.7c_fc_fc_b0_92_75"
      | "device_tracker.76_60_ab_34_10_92"
      | "device_tracker.4e_66_b2_a5_2d_46"
      | "device_tracker.77_d9_ae_cf_0d_c0"
      | "device_tracker.51_6a_57_61_e7_2e"
      | "device_tracker.76_78_3f_80_a8_c9"
      | "device_tracker.smart_tag_211"
      | "device_tracker.55_a7_93_61_51_1a"
      | "device_tracker.5d_fc_2e_60_98_13"
      | "device_tracker.47_90_fb_e4_f5_ef"
      | "device_tracker.4d_2b_d8_25_05_0d"
      | "device_tracker.66_62_20_4d_b8_9f"
      | "device_tracker.75_12_41_b8_1b_b3"
      | "device_tracker.4a_0d_8e_ee_5f_14"
      | "device_tracker.smart_tag_212"
      | "device_tracker.49_68_05_96_60_d6"
      | "device_tracker.57_96_b6_8c_f3_35"
      | "device_tracker.7a_36_70_3d_f1_26"
      | "device_tracker.7a_d1_a4_2d_a0_2d"
      | "device_tracker.58_a5_bb_ca_3b_cf"
      | "device_tracker.5c_cb_40_27_0b_d3"
      | "device_tracker.54_63_39_c4_e2_7f"
      | "device_tracker.smart_tag_213"
      | "device_tracker.7f_9c_6e_f7_dc_a2"
      | "device_tracker.50_0d_23_cd_f7_82"
      | "device_tracker.64_c1_93_3c_1a_d7"
      | "device_tracker.49_39_21_c1_d9_ac"
      | "device_tracker.7b_d7_a1_00_b5_a0"
      | "device_tracker.43_8b_0f_6e_ae_d3"
      | "device_tracker.smart_tag_214"
      | "device_tracker.4f_b2_10_69_9a_75"
      | "device_tracker.6a_eb_f2_cc_e0_e5"
      | "device_tracker.47_75_7d_94_c2_a7"
      | "device_tracker.6c_e9_99_fd_d8_df"
      | "device_tracker.46_1c_30_d9_40_dc"
      | "device_tracker.45_7e_ae_d9_09_9e"
      | "device_tracker.78_84_7f_8a_8c_1c"
      | "device_tracker.6f_5d_6a_3f_a0_be"
      | "device_tracker.75_ed_88_db_92_92"
      | "device_tracker.79_6d_60_be_1d_31"
      | "device_tracker.4f_98_53_21_e0_8c"
      | "device_tracker.61_3d_53_92_13_c6"
      | "device_tracker.67_93_89_94_a0_af"
      | "device_tracker.41_a0_70_dd_1b_36"
      | "device_tracker.65_fd_d1_f6_f0_14"
      | "device_tracker.smart_tag_215"
      | "device_tracker.60_c5_88_a4_53_22"
      | "device_tracker.71_21_a9_c3_c9_2f"
      | "device_tracker.51_30_c0_e7_cc_cb"
      | "device_tracker.46_ca_4c_58_c6_cf"
      | "device_tracker.6a_2f_8d_d0_ce_b7"
      | "device_tracker.4c_52_fd_38_03_a9"
      | "device_tracker.60_62_68_38_a4_c3"
      | "device_tracker.49_30_0c_a9_50_74"
      | "device_tracker.smart_tag_216"
      | "device_tracker.73_e0_49_cf_32_27"
      | "device_tracker.4c_cf_ee_fb_57_c3"
      | "device_tracker.74_2e_18_cb_a5_42"
      | "device_tracker.72_ab_87_44_b9_38"
      | "device_tracker.7a_0f_f5_c9_d2_59"
      | "device_tracker.72_60_89_5f_6f_cb"
      | "device_tracker.smart_tag_217"
      | "device_tracker.7d_c7_8b_a9_d8_22"
      | "device_tracker.61_3b_b6_06_20_51"
      | "device_tracker.73_7a_3e_90_60_6b"
      | "device_tracker.55_33_e0_b0_1f_fa"
      | "device_tracker.7e_a7_8b_86_f4_0e"
      | "device_tracker.52_57_75_5a_37_b1"
      | "device_tracker.smart_tag_218"
      | "device_tracker.4a_04_e9_b8_79_3f"
      | "device_tracker.77_54_e4_4e_69_65"
      | "device_tracker.56_98_1f_6c_3a_dc"
      | "device_tracker.6e_94_69_3d_a4_37"
      | "device_tracker.55_56_57_18_17_7d"
      | "device_tracker.52_55_b6_71_fa_93"
      | "device_tracker.65_f9_d7_06_16_41"
      | "device_tracker.smart_tag_219"
      | "device_tracker.46_44_4e_10_ec_c6"
      | "device_tracker.54_67_1e_6f_b0_82"
      | "device_tracker.76_8e_92_37_8b_41"
      | "device_tracker.79_ca_33_55_37_b9"
      | "device_tracker.75_a6_52_78_c3_ae"
      | "device_tracker.4b_7f_45_38_dd_62"
      | "device_tracker.49_16_99_fc_5c_ec"
      | "device_tracker.smart_tag_220"
      | "device_tracker.6f_3a_c2_bd_11_9c"
      | "device_tracker.76_6e_e2_96_c5_1d"
      | "device_tracker.6e_c2_94_23_91_6a"
      | "device_tracker.75_2c_e0_3e_9d_ff"
      | "device_tracker.68_42_f7_d5_31_f0"
      | "device_tracker.70_79_2e_2a_3d_06"
      | "device_tracker.68_e3_e6_9b_33_7e"
      | "device_tracker.smart_tag_221"
      | "device_tracker.5e_4b_68_73_8c_c7"
      | "device_tracker.57_fc_69_70_ea_6f"
      | "device_tracker.44_85_05_21_ce_fc"
      | "device_tracker.7d_2b_a0_e6_10_47"
      | "device_tracker.5c_2a_71_04_89_9d"
      | "device_tracker.7e_7b_d9_dc_db_52"
      | "device_tracker.smart_tag_222"
      | "device_tracker.54_af_95_af_83_8c"
      | "device_tracker.57_c8_ac_57_42_f6"
      | "device_tracker.5a_fa_0a_4a_bc_f9"
      | "device_tracker.6e_00_f7_3f_ff_f1"
      | "device_tracker.6d_94_a8_16_4a_ff"
      | "device_tracker.47_99_56_75_89_2f"
      | "device_tracker.7b_4c_37_2c_ec_31"
      | "device_tracker.smart_tag_223"
      | "device_tracker.4f_41_a0_79_03_f7"
      | "device_tracker.67_40_33_bd_dd_e4"
      | "device_tracker.6f_a6_a2_db_b0_6e"
      | "device_tracker.5c_49_a3_6f_dc_ec"
      | "device_tracker.42_0f_e9_bf_fa_7c"
      | "device_tracker.57_46_ac_59_39_3c"
      | "device_tracker.52_87_6d_e7_ab_39"
      | "device_tracker.smart_tag_224"
      | "device_tracker.7c_5e_80_9c_cb_f5"
      | "device_tracker.5e_fe_8a_24_61_60"
      | "device_tracker.4d_ab_99_93_7e_44"
      | "device_tracker.56_3c_e9_de_ac_4e"
      | "device_tracker.69_f5_5b_f7_d3_ec"
      | "device_tracker.58_a6_79_14_c7_3b"
      | "device_tracker.5f_43_ed_94_9d_33"
      | "device_tracker.42_d2_7a_81_fa_0f"
      | "device_tracker.smart_tag_225"
      | "device_tracker.65_ca_c2_36_0d_69"
      | "device_tracker.61_25_07_c4_37_c6"
      | "device_tracker.6d_5d_65_ae_56_ab"
      | "device_tracker.63_a0_a1_38_18_e7"
      | "device_tracker.6d_f6_db_78_92_ee"
      | "device_tracker.41_60_10_c2_77_4a"
      | "device_tracker.smart_tag_226"
      | "device_tracker.5e_48_19_15_13_bd"
      | "device_tracker.48_a6_a9_91_9b_56"
      | "device_tracker.53_a2_9a_8e_2e_e1"
      | "device_tracker.44_c5_e5_e0_e8_b0"
      | "device_tracker.45_64_94_aa_42_8c"
      | "device_tracker.5d_18_9a_cd_ad_6a"
      | "device_tracker.40_d5_7f_01_7d_e9"
      | "device_tracker.smart_tag_227"
      | "device_tracker.6f_28_8b_be_e4_2d"
      | "device_tracker.43_0a_ce_4c_c2_34"
      | "device_tracker.59_37_80_f8_13_07"
      | "device_tracker.6f_c5_d0_80_21_29"
      | "device_tracker.57_79_ce_10_ba_90"
      | "device_tracker.75_a9_f9_a5_01_ee"
      | "device_tracker.smart_tag_228"
      | "device_tracker.5d_ef_5f_80_10_7c"
      | "device_tracker.47_6e_fa_ef_3a_dd"
      | "device_tracker.4c_79_43_d0_32_a4"
      | "device_tracker.64_aa_ed_ed_b3_7b"
      | "device_tracker.79_e4_aa_5b_b5_e6"
      | "device_tracker.6e_96_67_9f_50_fd"
      | "device_tracker.5c_c7_ca_7d_c5_ba"
      | "device_tracker.smart_tag_229"
      | "device_tracker.75_ae_3e_40_20_5d"
      | "device_tracker.46_ce_8f_89_f6_15"
      | "device_tracker.51_15_97_ca_fd_c3"
      | "device_tracker.57_f6_46_7c_10_aa"
      | "device_tracker.69_45_32_60_d1_eb"
      | "device_tracker.47_9a_d4_f1_09_87"
      | "device_tracker.57_03_14_76_89_2f"
      | "device_tracker.smart_tag_230"
      | "device_tracker.4e_d9_d2_c5_c8_f0"
      | "device_tracker.4c_0f_b8_a8_cb_10"
      | "device_tracker.7f_bf_8b_28_ce_b5"
      | "device_tracker.42_9c_53_a5_14_6f"
      | "device_tracker.74_17_c6_bb_60_84"
      | "device_tracker.47_19_96_e5_22_0e"
      | "device_tracker.7c_4c_34_8f_2b_64"
      | "device_tracker.5c_a5_d9_20_a1_df"
      | "device_tracker.smart_tag_231"
      | "device_tracker.62_e7_d1_22_ba_3b"
      | "device_tracker.65_8d_f7_68_2c_fd"
      | "device_tracker.73_b2_d2_5c_8d_70"
      | "device_tracker.5b_b2_06_f1_4f_d6"
      | "device_tracker.47_4a_ec_77_ba_b6"
      | "device_tracker.6b_05_12_c2_f6_92"
      | "device_tracker.5c_90_05_26_f7_82"
      | "device_tracker.58_5c_fe_c5_ff_a6"
      | "device_tracker.4e_bd_b3_c8_49_e8"
      | "device_tracker.4c_4f_fd_98_36_54"
      | "device_tracker.smart_tag_232"
      | "device_tracker.47_ef_eb_87_57_94"
      | "device_tracker.77_12_cd_96_c5_9f"
      | "device_tracker.4e_06_c7_32_13_8d"
      | "device_tracker.5c_5a_e5_5f_8e_7a"
      | "device_tracker.5a_82_ae_b7_61_8b"
      | "device_tracker.43_0e_08_20_aa_b8"
      | "device_tracker.4e_f7_dd_cc_59_b3"
      | "device_tracker.54_61_9d_44_67_5c"
      | "device_tracker.74_12_03_fb_6a_56"
      | "device_tracker.76_0b_95_87_eb_a7"
      | "device_tracker.77_eb_85_db_a0_1d"
      | "device_tracker.75_27_2e_ac_35_f3"
      | "device_tracker.smart_tag_233"
      | "device_tracker.40_1b_7a_da_c0_13"
      | "device_tracker.15_6d_e5_c8_59_0f"
      | "device_tracker.52_b6_59_76_96_52"
      | "device_tracker.67_36_9f_f8_e7_f7"
      | "device_tracker.3a_39_b5_39_77_67"
      | "device_tracker.51_af_f0_dc_18_c6"
      | "device_tracker.5f_16_f2_b2_b4_90"
      | "device_tracker.45_bd_21_5f_91_23"
      | "device_tracker.47_71_8a_60_0b_51"
      | "device_tracker.71_63_0a_c8_83_ec"
      | "device_tracker.smart_tag_234"
      | "device_tracker.02_3a_14_d5_07_b4"
      | "device_tracker.63_1f_ec_c2_ca_7f"
      | "device_tracker.70_c9_38_dd_99_99"
      | "device_tracker.72_a8_8e_67_01_e8"
      | "device_tracker.79_f2_f7_a0_e5_fc"
      | "device_tracker.76_55_fb_ae_dd_ed"
      | "device_tracker.2c_a7_74_96_b2_35"
      | "device_tracker.6e_ce_9e_9b_36_4a"
      | "device_tracker.67_9a_64_cf_fc_8c"
      | "device_tracker.59_f3_54_9a_21_75"
      | "device_tracker.18_b4_ce_16_4f_a0"
      | "device_tracker.4d_4e_2f_16_5c_5e"
      | "device_tracker.70_90_60_81_c3_73"
      | "device_tracker.4c_61_17_f1_ea_47"
      | "device_tracker.smart_tag_235"
      | "device_tracker.62_8a_2d_7b_e1_54"
      | "device_tracker.0f_ff_85_98_c6_41"
      | "device_tracker.48_92_26_26_57_27"
      | "device_tracker.5e_ee_d6_6a_c0_4a"
      | "device_tracker.46_9a_34_9b_dc_f3"
      | "device_tracker.7a_c4_bb_f3_87_61"
      | "device_tracker.70_14_a6_8b_f7_3e"
      | "device_tracker.47_80_26_7d_d5_73"
      | "device_tracker.55_21_b2_07_0b_3c"
      | "device_tracker.72_74_19_ff_72_c1"
      | "device_tracker.40_ae_d9_b6_37_01"
      | "device_tracker.le_onyx_64"
      | "device_tracker.78_98_88_e5_9a_59"
      | "device_tracker.6c_3c_f4_ac_64_a0"
      | "device_tracker.21_4f_a9_ea_d8_07"
      | "device_tracker.63_2d_eb_6f_65_8b"
      | "device_tracker.6c_9c_97_93_88_dd"
      | "device_tracker.48_1e_40_cf_0a_5c"
      | "device_tracker.45_84_7c_56_76_49"
      | "device_tracker.5b_fe_de_7b_b6_12"
      | "device_tracker.le_onyx_65"
      | "device_tracker.7f_55_05_a5_ae_f8"
      | "device_tracker.le_onyx_66"
      | "device_tracker.57_57_ea_e8_10_c4"
      | "device_tracker.5f_2c_d5_ab_87_3e"
      | "device_tracker.60_39_d5_44_81_6b"
      | "device_tracker.36_7d_36_79_17_99"
      | "device_tracker.7a_57_21_c1_da_ff"
      | "device_tracker.6e_fd_54_63_68_16"
      | "device_tracker.70_1d_c2_d5_77_f2"
      | "device_tracker.70_f9_fd_d9_69_28"
      | "device_tracker.le_onyx_67"
      | "device_tracker.le_onyx_68"
      | "device_tracker.le_onyx_69"
      | "device_tracker.le_onyx_70"
      | "device_tracker.72_0d_c5_3e_83_c4"
      | "device_tracker.7a_a0_70_5f_73_a9"
      | "device_tracker.le_onyx_71"
      | "device_tracker.le_onyx_72"
      | "device_tracker.le_onyx_73"
      | "device_tracker.68_1f_e4_61_5d_5f"
      | "device_tracker.70_65_0d_d8_42_8a"
      | "device_tracker.0a_03_93_98_dc_59"
      | "device_tracker.70_05_fe_15_1d_2c"
      | "device_tracker.le_onyx_74"
      | "device_tracker.77_82_0a_0a_ef_02"
      | "device_tracker.52_d4_69_c9_21_d0"
      | "device_tracker.le_wh_1000xm5"
      | "device_tracker.42_22_52_47_96_63"
      | "device_tracker.5f_ce_4c_10_bd_33"
      | "device_tracker.78_df_ac_a3_4f_41"
      | "device_tracker.43_7d_43_77_2c_09"
      | "device_tracker.5d_bd_ed_93_26_58"
      | "device_tracker.51_ca_b0_46_d8_71"
      | "device_tracker.6b_6b_72_19_ae_21"
      | "device_tracker.52_cd_0a_af_55_8f"
      | "device_tracker.5c_f4_c0_00_30_ca"
      | "device_tracker.4b_54_b5_21_7f_a1"
      | "device_tracker.45_a2_d1_59_ea_22"
      | "device_tracker.5a_d0_2b_cf_48_7f"
      | "device_tracker.le_onyx_75"
      | "device_tracker.09_58_e5_3b_09_60"
      | "device_tracker.60_07_1d_ce_41_0e"
      | "device_tracker.59_c1_26_d4_6e_ac"
      | "device_tracker.7d_bd_30_fb_69_80"
      | "device_tracker.59_72_ed_45_f4_ab"
      | "device_tracker.le_onyx_76"
      | "device_tracker.le_onyx_77"
      | "device_tracker.le_onyx_78"
      | "device_tracker.60_2d_96_23_90_6a"
      | "device_tracker.5b_a6_9e_e9_4e_44"
      | "device_tracker.49_e1_b5_a8_90_de"
      | "device_tracker.67_f0_1b_fb_29_99"
      | "device_tracker.4d_10_3e_c1_56_57"
      | "device_tracker.46_e5_14_89_6c_e2"
      | "device_tracker.56_de_7a_3c_fc_ad"
      | "device_tracker.62_85_cb_a9_c1_19"
      | "device_tracker.5b_e6_df_96_40_f7"
      | "device_tracker.54_7f_aa_bc_25_85"
      | "device_tracker.77_47_8a_86_a1_2a"
      | "device_tracker.27_99_c2_83_31_98"
      | "device_tracker.le_onyx_79"
      | "device_tracker.62_a4_c7_62_d7_9b"
      | "device_tracker.5f_2c_b5_64_90_ef"
      | "device_tracker.le_onyx_80"
      | "device_tracker.4b_17_9b_82_50_92"
      | "device_tracker.7c_f1_39_c0_aa_04"
      | "device_tracker.le_onyx_81"
      | "device_tracker.5b_a9_70_12_c3_37"
      | "device_tracker.le_onyx_82"
      | "device_tracker.smart_tag_236"
      | "device_tracker.6f_cc_34_ea_72_b0"
      | "device_tracker.50_5a_ff_9f_d1_4c"
      | "device_tracker.6b_d2_78_51_a9_f7"
      | "device_tracker.le_onyx_83"
      | "device_tracker.smart_tag_237"
      | "device_tracker.le_onyx_84"
      | "device_tracker.54_4d_23_b3_1a_eb"
      | "device_tracker.5a_d1_4f_1b_12_9c"
      | "device_tracker.40_04_a2_2f_7a_68"
      | "device_tracker.4f_c9_23_5b_59_dd"
      | "device_tracker.61_27_50_7e_8f_b6"
      | "device_tracker.10_2f_2e_6e_38_b6"
      | "device_tracker.le_onyx_85"
      | "device_tracker.le_onyx_86"
      | "device_tracker.le_onyx_87"
      | "device_tracker.4a_cd_13_dd_b2_42"
      | "device_tracker.le_onyx_88"
      | "device_tracker.le_onyx_89"
      | "device_tracker.le_onyx_90"
      | "device_tracker.le_onyx_91"
      | "device_tracker.le_onyx_92"
      | "device_tracker.6d_de_a1_ff_b3_38"
      | "device_tracker.7e_26_4b_48_db_41"
      | "device_tracker.le_onyx_93"
      | "device_tracker.67_46_36_ca_fb_17"
      | "device_tracker.55_af_52_6e_2f_88"
      | "device_tracker.43_29_bc_90_95_84"
      | "device_tracker.55_d2_d1_6b_56_00"
      | "device_tracker.le_onyx_94"
      | "device_tracker.4e_68_7b_e9_27_fd"
      | "device_tracker.smart_tag_238"
      | "device_tracker.3c_5b_7a_b3_85_27"
      | "device_tracker.le_onyx_95"
      | "device_tracker.le_onyx_96"
      | "device_tracker.le_onyx_97"
      | "device_tracker.le_onyx_98"
      | "device_tracker.le_onyx_99"
      | "device_tracker.le_onyx_100"
      | "device_tracker.le_onyx_101"
      | "device_tracker.le_onyx_102"
      | "device_tracker.le_onyx_103"
      | "device_tracker.le_onyx_104"
      | "device_tracker.4e_b3_e0_ec_31_34"
      | "device_tracker.62_2d_11_a0_40_56"
      | "device_tracker.64_65_95_34_11_4e"
      | "device_tracker.le_onyx_105"
      | "device_tracker.le_onyx_106"
      | "device_tracker.le_onyx_107"
      | "device_tracker.76_2b_0c_d4_8c_b1"
      | "device_tracker.69_20_9d_62_5f_ea"
      | "device_tracker.66_42_71_bf_14_72"
      | "device_tracker.65_4b_8b_bf_39_a5"
      | "device_tracker.le_onyx_108"
      | "device_tracker.le_onyx_109"
      | "device_tracker.le_onyx_110"
      | "device_tracker.5f_33_cc_47_0e_6e"
      | "device_tracker.le_onyx_111"
      | "device_tracker.le_onyx_112"
      | "device_tracker.le_onyx_113"
      | "device_tracker.5c_f7_62_cd_90_c9"
      | "device_tracker.33_67_0e_3d_82_40"
      | "device_tracker.61_97_4c_6d_4d_1d"
      | "device_tracker.45_a7_16_8e_4e_60"
      | "device_tracker.75_08_76_9f_f8_f9"
      | "device_tracker.le_onyx_114"
      | "device_tracker.73_c7_fd_af_e1_06"
      | "device_tracker.64_50_30_ce_94_1d"
      | "device_tracker.52_70_7b_49_af_1f"
      | "device_tracker.le_onyx_115"
      | "device_tracker.smart_tag_239"
      | "device_tracker.le_onyx_116"
      | "device_tracker.43_97_3a_6b_52_57"
      | "device_tracker.le_onyx_117"
      | "device_tracker.le_onyx_118"
      | "device_tracker.le_onyx_119"
      | "device_tracker.le_onyx_120"
      | "device_tracker.5e_9e_96_bf_42_ec"
      | "device_tracker.79_98_d5_0c_a9_96"
      | "device_tracker.le_onyx_121"
      | "device_tracker.le_onyx_122"
      | "device_tracker.le_onyx_123"
      | "device_tracker.1b_3f_e7_7c_a2_d6"
      | "device_tracker.le_onyx_124"
      | "device_tracker.47_82_e3_a2_72_09"
      | "device_tracker.55_ed_71_56_63_df"
      | "device_tracker.57_ac_f1_04_ea_8e"
      | "device_tracker.4d_5d_0c_30_7a_cf"
      | "device_tracker.le_onyx_125"
      | "device_tracker.72_85_1e_5a_9a_f4"
      | "device_tracker.61_68_d4_a9_1a_eb"
      | "device_tracker.4c_99_4a_8a_d9_f7"
      | "device_tracker.69_1f_5b_76_53_fa"
      | "device_tracker.68_ce_3d_84_a3_1e"
      | "device_tracker.4a_07_a5_04_87_9a"
      | "device_tracker.5b_8a_1b_08_0a_77"
      | "device_tracker.62_5a_a6_87_e2_3f"
      | "device_tracker.smart_tag_240"
      | "device_tracker.6b_63_15_76_fb_ea"
      | "device_tracker.60_db_1d_4d_10_b5"
      | "device_tracker.37_94_e5_8d_d4_c6"
      | "device_tracker.63_b1_cd_33_6d_7e"
      | "device_tracker.64_3a_6d_00_cc_4f"
      | "device_tracker.73_ee_a9_40_6a_d2"
      | "device_tracker.le_onyx_126"
      | "device_tracker.44_4e_b6_e2_06_ce"
      | "device_tracker.70_cf_26_9c_d1_4f"
      | "device_tracker.le_onyx_127"
      | "device_tracker.6e_b2_23_8d_67_8d"
      | "device_tracker.53_29_0a_22_98_91"
      | "device_tracker.41_52_1a_5b_32_7c"
      | "device_tracker.7c_61_cf_4c_6a_24"
      | "device_tracker.4f_35_b2_32_35_c3"
      | "device_tracker.73_b9_12_fa_b6_c9"
      | "device_tracker.5b_e2_81_b7_80_36"
      | "device_tracker.le_onyx_128"
      | "device_tracker.le_onyx_129"
      | "device_tracker.le_onyx_130"
      | "device_tracker.69_bf_54_e5_bd_87"
      | "device_tracker.5c_d9_3b_7a_a0_02"
      | "device_tracker.7a_c2_3e_f2_20_6f"
      | "device_tracker.51_f8_ac_c6_f8_1d"
      | "device_tracker.0e_30_a6_fb_4d_6a"
      | "device_tracker.6b_af_ad_6f_b8_33"
      | "device_tracker.7d_0f_c2_9d_f4_df"
      | "device_tracker.le_onyx_131"
      | "device_tracker.59_f1_45_22_92_9d"
      | "device_tracker.le_onyx_132"
      | "device_tracker.le_onyx_133"
      | "device_tracker.le_onyx_134"
      | "device_tracker.le_onyx_135"
      | "device_tracker.le_onyx_136"
      | "device_tracker.le_onyx_137"
      | "device_tracker.le_onyx_138"
      | "device_tracker.le_onyx_139"
      | "device_tracker.le_onyx_140"
      | "device_tracker.53_5b_1a_f4_ca_d5"
      | "device_tracker.le_onyx_141"
      | "device_tracker.le_onyx_142"
      | "device_tracker.le_onyx_143"
      | "device_tracker.71_fc_5b_a0_43_37"
      | "device_tracker.le_onyx_144"
      | "device_tracker.le_onyx_145"
      | "device_tracker.29_b1_0a_bb_bf_42"
      | "device_tracker.le_onyx_146"
      | "device_tracker.le_wh_1000xm5_2"
      | "device_tracker.le_onyx_147"
      | "device_tracker.53_a9_45_a9_cd_8b"
      | "device_tracker.57_1a_5c_70_66_d0"
      | "device_tracker.78_ab_82_b6_10_2a"
      | "device_tracker.le_onyx_148"
      | "device_tracker.63_17_4d_e6_4d_5e"
      | "device_tracker.48_32_0f_01_68_dd"
      | "device_tracker.78_82_a3_5b_18_3e"
      | "device_tracker.42_6c_3b_8f_83_2f"
      | "device_tracker.7d_54_2c_da_29_b2"
      | "device_tracker.31_c2_86_f8_d2_08"
      | "device_tracker.44_89_96_c5_2e_52"
      | "device_tracker.le_onyx_149"
      | "device_tracker.4f_5a_f0_75_6a_3f"
      | "device_tracker.73_88_15_4c_20_2a"
      | "device_tracker.43_f4_cf_a5_e6_6e"
      | "device_tracker.74_ae_83_62_20_dc"
      | "device_tracker.4f_6a_4f_6c_ad_9f"
      | "device_tracker.5a_89_e0_0c_c2_4a"
      | "device_tracker.4b_71_02_e5_8b_bf"
      | "device_tracker.36_12_63_a9_b8_72"
      | "device_tracker.74_d4_6e_a9_39_44"
      | "device_tracker.59_e2_9f_d3_fb_66"
      | "device_tracker.5f_85_90_70_a1_4e"
      | "device_tracker.58_37_9d_41_2e_aa"
      | "device_tracker.6b_d4_eb_9f_8d_f4"
      | "device_tracker.67_d4_0d_5f_37_cb"
      | "device_tracker.5f_db_b9_9b_29_44"
      | "device_tracker.55_0a_7e_8a_63_c9"
      | "device_tracker.70_5a_6f_b7_71_08"
      | "device_tracker.52_1e_58_0c_e3_1c"
      | "device_tracker.45_26_4b_4d_1d_d2"
      | "device_tracker.51_86_b1_46_3b_6d"
      | "device_tracker.69_ac_d7_27_69_28"
      | "device_tracker.le_onyx_150"
      | "device_tracker.51_47_58_c4_fb_86"
      | "device_tracker.6b_c2_d9_77_69_0a"
      | "device_tracker.6b_16_70_39_ff_af"
      | "device_tracker.54_06_b3_f1_c1_67"
      | "device_tracker.le_wh_1000xm5_3"
      | "device_tracker.7c_6f_e6_e1_f0_72"
      | "device_tracker.5f_f4_c1_4a_ad_f5"
      | "device_tracker.43_50_19_5c_36_e2"
      | "device_tracker.5d_81_ec_55_b3_34"
      | "device_tracker.68_6c_6e_67_da_9d"
      | "device_tracker.62_3f_71_30_27_21"
      | "device_tracker.2c_fd_f7_e6_db_58"
      | "device_tracker.42_79_54_ed_15_92"
      | "device_tracker.fc_3f_bd_0e_cc_56"
      | "device_tracker.4a_0e_ac_77_7c_5f"
      | "device_tracker.5f_32_84_b2_e8_4e"
      | "device_tracker.43_a5_ba_86_c9_32"
      | "device_tracker.66_0a_7c_21_d0_20"
      | "device_tracker.70_c7_f6_e9_7e_63"
      | "device_tracker.76_70_e3_5f_5d_98"
      | "device_tracker.70_00_ad_26_c2_3f"
      | "device_tracker.5d_a2_29_bf_c5_0a"
      | "device_tracker.77_90_5a_d0_10_a2"
      | "device_tracker.6c_da_e1_90_08_53"
      | "device_tracker.60_51_a9_aa_f3_50"
      | "device_tracker.79_eb_18_55_9e_a5"
      | "device_tracker.47_2f_85_2f_e2_39"
      | "device_tracker.5c_6a_85_20_cb_af"
      | "device_tracker.78_3c_11_11_51_fb"
      | "device_tracker.5e_92_66_e3_cf_f3"
      | "device_tracker.63_21_95_23_37_6e"
      | "device_tracker.48_a6_e0_fb_17_b4"
      | "device_tracker.40_92_16_be_a0_c6"
      | "device_tracker.50_09_55_dd_e5_b9"
      | "device_tracker.smart_tag_241"
      | "device_tracker.67_8b_a4_32_6e_9c"
      | "device_tracker.45_92_af_4b_e2_83"
      | "device_tracker.7f_8c_35_ee_d5_34"
      | "device_tracker.74_25_db_76_86_8b"
      | "device_tracker.56_da_fc_06_bf_2f"
      | "device_tracker.6d_cd_3d_79_7f_2d"
      | "device_tracker.6e_7d_14_ba_51_05"
      | "device_tracker.53_43_4b_a8_31_54"
      | "device_tracker.smart_tag_242"
      | "device_tracker.77_ba_66_49_26_bc"
      | "device_tracker.56_f9_12_b6_24_97"
      | "device_tracker.4d_20_0e_25_34_7c"
      | "device_tracker.6a_a9_b3_d6_9f_d6"
      | "device_tracker.40_64_55_4c_19_49"
      | "device_tracker.73_c3_b4_07_08_a4"
      | "device_tracker.56_60_fb_53_a7_61"
      | "device_tracker.69_59_81_65_9f_7d"
      | "device_tracker.56_32_88_5c_3c_ae"
      | "device_tracker.5e_bb_69_d2_3f_a6"
      | "device_tracker.50_c2_6b_22_ff_bb"
      | "device_tracker.7f_6f_a7_95_15_1a"
      | "device_tracker.5c_fe_2f_b9_ec_97"
      | "device_tracker.66_26_e6_27_c5_66"
      | "device_tracker.smart_tag_243"
      | "device_tracker.68_64_bd_c1_af_e6"
      | "device_tracker.70_a7_ac_92_4f_2d"
      | "device_tracker.56_8a_04_ab_64_3d"
      | "device_tracker.6d_8d_fd_fc_92_23"
      | "device_tracker.42_16_1c_94_f4_48"
      | "device_tracker.48_02_27_76_42_25"
      | "device_tracker.69_72_35_68_b8_47"
      | "device_tracker.77_b5_96_4e_9e_13"
      | "device_tracker.smart_tag_244"
      | "device_tracker.48_3d_35_f5_77_7d"
      | "device_tracker.44_cb_cd_fb_4e_8d"
      | "device_tracker.60_a6_09_af_2a_48"
      | "device_tracker.48_8a_9d_f5_79_33"
      | "device_tracker.4b_73_9b_eb_ef_d7"
      | "device_tracker.6c_83_be_70_4a_33"
      | "device_tracker.67_0e_5a_7f_a7_b4"
      | "device_tracker.49_6e_1d_20_2b_9c"
      | "device_tracker.5a_8b_2a_cb_f3_c2"
      | "device_tracker.smart_tag_245"
      | "device_tracker.4f_d3_7d_a5_5b_88"
      | "device_tracker.57_d0_97_a5_51_e5"
      | "device_tracker.41_1f_70_27_c5_cf"
      | "device_tracker.71_67_0c_aa_f0_e1"
      | "device_tracker.53_a6_5c_b0_77_f6"
      | "device_tracker.47_6f_7b_4b_a6_7d"
      | "device_tracker.smart_tag_246"
      | "device_tracker.65_01_54_04_8b_0c"
      | "device_tracker.6e_cb_cf_b8_e6_a9"
      | "device_tracker.4c_21_28_16_41_71"
      | "device_tracker.7e_0d_74_88_3e_bd"
      | "device_tracker.5f_47_c0_8d_a9_f3"
      | "device_tracker.6a_4a_9a_6b_46_a1"
      | "device_tracker.4e_38_e3_89_28_9c"
      | "device_tracker.51_5b_a6_fc_ef_3a"
      | "device_tracker.47_fb_e5_b8_3d_cd"
      | "device_tracker.72_07_dd_9b_83_bd"
      | "device_tracker.70_73_b2_2f_38_41"
      | "device_tracker.smart_tag_247"
      | "device_tracker.48_a2_58_9b_33_8b"
      | "device_tracker.70_53_a2_e5_5d_52"
      | "device_tracker.72_a6_6c_d9_c2_3d"
      | "device_tracker.65_78_16_e5_a9_e4"
      | "device_tracker.48_90_81_c6_f8_a8"
      | "device_tracker.7e_c1_7e_8e_88_8a"
      | "device_tracker.49_f8_60_52_cc_d2"
      | "device_tracker.smart_tag_248"
      | "device_tracker.71_03_99_23_65_2c"
      | "device_tracker.59_f0_5d_e5_5a_47"
      | "device_tracker.45_14_87_f9_16_d8"
      | "device_tracker.65_18_60_0e_32_99"
      | "device_tracker.58_53_f6_f6_2a_3d"
      | "device_tracker.52_30_21_c3_d2_d0"
      | "device_tracker.5d_08_5b_10_d5_64"
      | "device_tracker.7f_55_a0_23_8c_49"
      | "device_tracker.47_ce_6a_98_9c_93"
      | "device_tracker.smart_tag_249"
      | "device_tracker.5f_65_b8_fb_5f_ac"
      | "device_tracker.43_41_25_50_86_ab"
      | "device_tracker.78_15_89_8a_20_24"
      | "device_tracker.73_de_7a_13_bc_41"
      | "device_tracker.78_7b_3a_22_31_e7"
      | "device_tracker.69_09_79_93_e1_91"
      | "device_tracker.71_01_d9_86_a2_4a"
      | "device_tracker.6e_15_15_d5_76_8d"
      | "device_tracker.smart_tag_250"
      | "device_tracker.58_09_70_19_d4_ff"
      | "device_tracker.60_f8_bf_8d_bb_90"
      | "device_tracker.51_ce_bb_1d_67_ae"
      | "device_tracker.4f_b1_80_b0_fe_f2"
      | "device_tracker.5f_0c_9a_c7_1f_d9"
      | "device_tracker.66_c0_d1_49_10_f7"
      | "device_tracker.65_84_5c_e5_e7_25"
      | "device_tracker.5e_76_c2_14_c2_f9"
      | "device_tracker.42_ec_5b_eb_69_62"
      | "device_tracker.smart_tag_251"
      | "device_tracker.79_c8_00_34_8a_9d"
      | "device_tracker.smart_tag_252"
      | "device_tracker.67_3d_10_6c_5d_94"
      | "device_tracker.smart_tag_253"
      | "device_tracker.42_a7_95_a3_0a_27"
      | "device_tracker.67_cf_af_33_57_37"
      | "device_tracker.79_e1_7c_fe_18_2a"
      | "device_tracker.46_02_00_b5_85_11"
      | "device_tracker.58_5c_de_b3_40_e4"
      | "device_tracker.7a_d4_23_76_5c_5f"
      | "device_tracker.73_a0_20_8a_03_8a"
      | "device_tracker.smart_tag_254"
      | "device_tracker.59_1e_3d_63_ec_82"
      | "device_tracker.42_b6_ca_4f_f9_58"
      | "device_tracker.58_e7_0d_da_ae_5a"
      | "device_tracker.65_3b_d4_eb_e4_9a"
      | "device_tracker.40_2d_4a_82_e3_8b"
      | "device_tracker.71_17_24_a5_e9_82"
      | "device_tracker.4d_45_61_6b_7d_95"
      | "device_tracker.smart_tag_255"
      | "device_tracker.5e_f7_63_29_1a_c7"
      | "device_tracker.61_c6_6e_7c_dd_cc"
      | "device_tracker.53_6c_d2_55_29_86"
      | "device_tracker.43_1b_14_ce_2c_8b"
      | "device_tracker.6c_fc_c2_fc_09_1f"
      | "device_tracker.72_ba_1e_de_ac_6d"
      | "device_tracker.7e_7c_7d_79_98_00"
      | "device_tracker.45_e1_f3_54_a9_06"
      | "device_tracker.5d_55_f4_af_90_c6"
      | "device_tracker.smart_tag_256"
      | "device_tracker.53_f7_85_1c_1d_3c"
      | "device_tracker.46_7a_12_a9_67_84"
      | "device_tracker.65_8b_dc_36_db_2a"
      | "device_tracker.51_c1_29_48_46_1e"
      | "device_tracker.69_40_18_80_8e_82"
      | "device_tracker.77_32_d1_e2_27_52"
      | "device_tracker.56_ae_12_60_c9_f1"
      | "device_tracker.smart_tag_257"
      | "device_tracker.6b_4f_5d_5a_c5_d3"
      | "device_tracker.71_1d_da_df_33_1a"
      | "device_tracker.55_79_94_20_05_f0"
      | "device_tracker.77_51_d1_d6_24_c7"
      | "device_tracker.77_8d_30_62_d5_05"
      | "device_tracker.42_7e_20_00_45_a8"
      | "device_tracker.68_ed_6f_b8_86_a6"
      | "device_tracker.71_b7_ca_cc_23_ab"
      | "device_tracker.6c_03_f4_7d_22_9a"
      | "device_tracker.smart_tag_258"
      | "device_tracker.69_34_3a_c8_b4_04"
      | "device_tracker.51_8c_b2_cb_b0_88"
      | "device_tracker.56_29_57_43_1f_e7"
      | "device_tracker.65_ef_c5_6d_96_4c"
      | "device_tracker.7a_64_ab_9e_30_05"
      | "device_tracker.42_5e_70_0c_17_1a"
      | "device_tracker.4f_60_45_b4_e2_3f"
      | "device_tracker.49_42_a7_2f_60_a0"
      | "device_tracker.60_f9_35_15_f7_b3"
      | "device_tracker.40_ed_0d_6a_00_25"
      | "device_tracker.6a_ab_59_50_5a_48"
      | "device_tracker.6a_78_63_f8_78_99"
      | "device_tracker.7a_44_5b_13_7b_cb"
      | "device_tracker.52_50_b1_05_52_64"
      | "device_tracker.40_49_ed_30_c1_8b"
      | "device_tracker.48_e0_b4_52_33_05"
      | "device_tracker.54_ce_a3_05_2d_92"
      | "device_tracker.5a_40_47_a5_6c_df"
      | "device_tracker.67_6c_2c_a1_01_30"
      | "device_tracker.tomtom_g"
      | "device_tracker.4d_3f_86_57_08_a0"
      | "device_tracker.54_7d_a8_68_93_c0"
      | "device_tracker.62_56_ac_7b_96_39"
      | "device_tracker.55_88_91_b4_70_09"
      | "device_tracker.48_c0_57_6a_d1_1b"
      | "device_tracker.44_10_7a_88_4c_71"
      | "device_tracker.5e_a7_bb_da_91_44"
      | "device_tracker.65_cf_ba_f9_fd_9e"
      | "device_tracker.73_f0_ce_e1_ec_63"
      | "device_tracker.41_4d_4b_1d_bb_a7"
      | "device_tracker.71_ab_07_b6_42_10"
      | "device_tracker.45_8b_9d_81_c3_32"
      | "device_tracker.76_f8_df_15_7b_25"
      | "device_tracker.7c_ad_a5_9f_ce_31"
      | "device_tracker.40_00_88_a2_45_fa"
      | "device_tracker.6d_f8_d2_44_57_89"
      | "device_tracker.53_17_35_15_c8_71"
      | "device_tracker.6b_4f_82_31_c2_6b"
      | "device_tracker.65_c3_61_e5_a8_38"
      | "device_tracker.56_1e_3a_f6_10_60"
      | "device_tracker.5f_5c_3d_36_bc_d8"
      | "device_tracker.7f_e7_4b_4b_78_fd"
      | "device_tracker.4b_19_b0_76_08_5d"
      | "device_tracker.68_a8_e8_2e_dc_d7"
      | "device_tracker.6c_99_23_ae_45_d5"
      | "device_tracker.67_5a_aa_3c_ce_ac"
      | "device_tracker.75_58_5b_7f_02_d5"
      | "device_tracker.66_cb_ba_03_18_39"
      | "device_tracker.56_ce_02_0c_23_57"
      | "device_tracker.44_07_06_62_84_92"
      | "device_tracker.5a_98_19_61_96_ac"
      | "device_tracker.71_b8_dc_56_1f_e3"
      | "device_tracker.77_8b_95_b6_69_c3"
      | "device_tracker.57_0d_f9_cf_57_14"
      | "device_tracker.58_e1_bb_18_a7_0e"
      | "device_tracker.65_bf_3d_0c_5c_f4"
      | "device_tracker.6c_e3_24_72_bf_a2"
      | "device_tracker.5f_ea_b0_63_66_b9"
      | "device_tracker.5f_f9_ea_6b_14_24"
      | "device_tracker.45_14_7c_33_ff_2b"
      | "device_tracker.44_c3_b3_55_d4_7a"
      | "device_tracker.55_e7_9e_83_67_6a"
      | "device_tracker.51_83_b9_78_63_16"
      | "device_tracker.79_6d_67_6a_f4_3e"
      | "device_tracker.4e_b0_2f_06_81_9e"
      | "device_tracker.68_33_be_81_08_f4"
      | "device_tracker.61_76_1d_27_86_1d"
      | "device_tracker.4e_63_35_dd_b0_e0"
      | "device_tracker.2b_84_3e_0a_37_b6"
      | "device_tracker.4d_fc_88_d3_ce_ca"
      | "device_tracker.54_2d_38_e6_46_c0"
      | "device_tracker.48_1e_e7_55_62_78"
      | "device_tracker.41_e7_94_39_f6_8b"
      | "device_tracker.4e_30_ef_10_bb_0b"
      | "device_tracker.5a_c5_8a_69_0c_07"
      | "device_tracker.66_bb_75_21_52_29"
      | "device_tracker.47_f0_ab_40_bf_05"
      | "device_tracker.4c_e2_1d_dd_00_47"
      | "device_tracker.4d_a6_76_99_be_43"
      | "device_tracker.7e_c7_a9_17_32_ee"
      | "device_tracker.42_92_1a_82_fe_8c"
      | "device_tracker.4e_96_1a_ca_80_0d"
      | "device_tracker.4f_a0_57_d7_49_67"
      | "device_tracker.42_df_b1_56_87_e6"
      | "device_tracker.4f_69_7a_da_23_c8"
      | "device_tracker.63_8e_aa_22_92_ab"
      | "device_tracker.smart_tag_259"
      | "device_tracker.63_c6_14_a6_22_80"
      | "device_tracker.47_dd_7a_ba_12_fe"
      | "device_tracker.54_8d_e0_93_28_0c"
      | "device_tracker.52_59_dd_19_84_bc"
      | "device_tracker.4f_d0_dc_92_a0_30"
      | "device_tracker.45_8d_75_88_c5_ca"
      | "device_tracker.48_e6_07_5f_38_6f"
      | "device_tracker.47_2c_ef_3b_44_32"
      | "device_tracker.47_b8_d2_c8_fe_9a"
      | "device_tracker.6b_52_78_e2_43_9e"
      | "device_tracker.7f_7e_ab_96_ff_b0"
      | "device_tracker.5d_f1_40_69_28_bd"
      | "device_tracker.57_ea_74_c0_52_1d"
      | "device_tracker.7b_cc_77_27_c5_b3"
      | "device_tracker.67_55_3c_9b_41_c8"
      | "device_tracker.5a_0c_47_e0_cb_4a"
      | "device_tracker.43_8d_ea_18_d3_5f"
      | "device_tracker.smart_tag_260"
      | "device_tracker.72_be_98_83_2f_ec"
      | "device_tracker.6b_ae_ec_de_74_5e"
      | "device_tracker.6f_11_14_aa_3c_78"
      | "device_tracker.55_ab_b4_7b_3f_a6"
      | "device_tracker.5d_52_45_58_a9_4d"
      | "device_tracker.7d_c6_78_91_e1_ec"
      | "device_tracker.55_9a_1d_6c_d3_3d"
      | "device_tracker.41_e0_f0_eb_e7_99"
      | "device_tracker.smart_tag_261"
      | "device_tracker.20_8f_ab_bc_52_f7"
      | "device_tracker.49_d1_3d_68_e6_19"
      | "device_tracker.65_87_e2_35_80_a9"
      | "device_tracker.4b_8e_6c_8a_7b_dc"
      | "device_tracker.75_44_9c_92_b9_3b"
      | "device_tracker.45_87_33_74_36_25"
      | "device_tracker.45_34_cc_67_9c_e0"
      | "device_tracker.77_6d_e0_de_2c_ec"
      | "device_tracker.58_cf_e4_d4_09_a9"
      | "device_tracker.smart_tag_262"
      | "device_tracker.64_4f_d2_0f_08_b6"
      | "device_tracker.49_cf_0c_9b_96_f3"
      | "device_tracker.7e_b2_f4_a0_ea_10"
      | "device_tracker.48_ff_64_b8_38_01"
      | "device_tracker.5d_6a_f1_7f_e1_b2"
      | "device_tracker.6e_09_7d_f8_5f_71"
      | "device_tracker.48_a3_36_e1_4c_1b"
      | "device_tracker.smart_tag_263"
      | "device_tracker.40_16_76_b0_4a_f7"
      | "device_tracker.56_53_9a_29_56_a3"
      | "device_tracker.6e_98_58_5f_1d_01"
      | "device_tracker.61_f7_90_83_8a_cd"
      | "device_tracker.71_c3_fa_7e_46_2b"
      | "device_tracker.69_f9_91_26_bf_9d"
      | "device_tracker.61_b2_1b_c4_8a_b3"
      | "device_tracker.41_84_46_bd_e4_c6"
      | "device_tracker.59_ab_32_53_42_3e"
      | "device_tracker.smart_tag_264"
      | "device_tracker.51_f1_9b_2f_7e_75"
      | "device_tracker.73_73_5c_fc_e1_89"
      | "device_tracker.6b_f5_22_3b_0a_c7"
      | "device_tracker.smart_tag_265"
      | "device_tracker.59_bd_69_89_76_a5"
      | "device_tracker.65_41_c0_7b_04_c7"
      | "device_tracker.7a_c0_1d_73_0b_92"
      | "device_tracker.57_4b_10_94_47_e6"
      | "device_tracker.4b_28_d9_4c_a0_19"
      | "device_tracker.7c_d3_44_66_0b_bb"
      | "device_tracker.smart_tag_266"
      | "device_tracker.4d_6e_7f_95_53_1c"
      | "device_tracker.6c_54_88_3d_5c_c6"
      | "device_tracker.smart_tag_267"
      | "device_tracker.5d_32_17_64_28_93"
      | "device_tracker.4f_05_67_ae_0a_bf"
      | "device_tracker.60_5d_e3_37_f4_49"
      | "device_tracker.67_2c_e9_a8_d2_a5"
      | "device_tracker.79_f0_b4_b1_25_43"
      | "device_tracker.7f_d1_a6_8d_94_2d"
      | "device_tracker.6d_c1_17_20_ef_3a"
      | "device_tracker.smart_tag_268"
      | "device_tracker.6d_85_c2_57_e0_89"
      | "device_tracker.66_10_99_66_d1_89"
      | "device_tracker.4d_a2_35_a6_34_fe"
      | "device_tracker.62_dc_a3_fb_3b_fd"
      | "device_tracker.7b_38_79_de_64_c7"
      | "device_tracker.66_fd_48_e8_74_a2"
      | "device_tracker.7c_34_b0_43_89_24"
      | "device_tracker.smart_tag_269"
      | "device_tracker.7f_5d_17_cb_bf_ae"
      | "device_tracker.7a_53_00_30_78_3c"
      | "device_tracker.58_65_db_08_5d_e3"
      | "device_tracker.64_7d_b1_ce_2c_44"
      | "device_tracker.79_7d_6d_6b_41_a9"
      | "device_tracker.51_b8_c2_e3_64_d2"
      | "device_tracker.4e_c6_02_54_8d_d3"
      | "device_tracker.61_30_98_3b_e3_17"
      | "device_tracker.smart_tag_270"
      | "device_tracker.73_2e_2a_d8_5f_0e"
      | "device_tracker.47_37_24_4e_20_a6"
      | "device_tracker.49_27_f0_dd_83_20"
      | "device_tracker.55_03_68_38_df_32"
      | "device_tracker.62_a8_ad_88_dc_2b"
      | "device_tracker.46_c5_24_cd_91_b7"
      | "device_tracker.6e_66_a8_99_fc_27"
      | "device_tracker.64_f4_1c_81_2e_39"
      | "device_tracker.smart_tag_271"
      | "device_tracker.7f_a3_a9_29_95_20"
      | "device_tracker.58_c8_e8_39_b1_3a"
      | "device_tracker.6e_34_79_21_ed_9f"
      | "device_tracker.54_49_87_4b_11_52"
      | "device_tracker.74_1d_77_23_64_37"
      | "device_tracker.4a_c1_a4_63_ec_79"
      | "device_tracker.4c_40_e6_0a_39_9a"
      | "device_tracker.51_8d_23_c2_33_a9"
      | "device_tracker.smart_tag_272"
      | "device_tracker.4f_ed_bd_57_51_a8"
      | "device_tracker.54_65_bc_14_38_48"
      | "device_tracker.63_74_df_4a_cc_c2"
      | "device_tracker.52_6a_d6_64_02_0f"
      | "device_tracker.4d_95_19_04_6b_77"
      | "device_tracker.4d_02_45_95_1f_ed"
      | "device_tracker.77_59_79_d7_47_5b"
      | "device_tracker.smart_tag_273"
      | "device_tracker.75_e1_78_8a_4c_99"
      | "device_tracker.4e_1f_37_6c_a2_40"
      | "device_tracker.59_d5_93_c9_28_2a"
      | "device_tracker.67_c6_16_8f_f6_3c"
      | "device_tracker.46_90_5b_fb_b1_f4"
      | "device_tracker.65_da_25_3e_7c_ac"
      | "device_tracker.48_ea_3b_b3_c2_6c"
      | "device_tracker.4b_ba_82_8c_ba_5c"
      | "device_tracker.smart_tag_274"
      | "device_tracker.72_c7_7d_74_0f_24"
      | "device_tracker.41_d9_35_31_e0_13"
      | "device_tracker.50_2e_9c_98_f9_91"
      | "device_tracker.57_ce_22_49_80_f6"
      | "device_tracker.7d_5b_a8_74_1a_16"
      | "device_tracker.5e_03_4d_0b_46_9e"
      | "device_tracker.smart_tag_275"
      | "device_tracker.4f_bb_01_74_4f_c8"
      | "device_tracker.55_1e_56_8a_a1_32"
      | "device_tracker.43_f4_ef_a3_7e_fc"
      | "device_tracker.67_66_46_23_47_c2"
      | "device_tracker.47_02_9a_f9_49_16"
      | "device_tracker.4a_2e_23_3b_a4_b5"
      | "device_tracker.63_3b_57_6d_18_49"
      | "device_tracker.64_b8_2a_53_e0_08"
      | "device_tracker.51_71_e1_3c_c8_fc"
      | "device_tracker.smart_tag_276"
      | "device_tracker.55_70_42_37_6e_81"
      | "device_tracker.68_73_b0_66_61_1d"
      | "device_tracker.4f_8c_0d_62_5a_de"
      | "device_tracker.7b_2a_a2_06_1e_7f"
      | "device_tracker.5c_b9_eb_b9_1a_8e"
      | "device_tracker.65_c1_4a_0a_e8_3c"
      | "device_tracker.smart_tag_277"
      | "device_tracker.51_b8_4c_29_41_11"
      | "device_tracker.56_54_35_c4_eb_fe"
      | "device_tracker.4d_d3_30_af_71_7a"
      | "device_tracker.6c_e1_c7_0a_5d_9d"
      | "device_tracker.43_26_54_28_07_3a"
      | "device_tracker.5e_53_15_63_ab_9f"
      | "device_tracker.78_d1_25_d1_ab_e1"
      | "device_tracker.smart_tag_278"
      | "device_tracker.7a_fd_e0_37_38_db"
      | "device_tracker.50_75_47_a7_b2_63"
      | "device_tracker.67_64_57_af_3e_6f"
      | "device_tracker.5c_ff_4e_b7_e0_6a"
      | "device_tracker.76_ba_3c_52_aa_3e"
      | "device_tracker.6b_07_d1_26_a2_fa"
      | "device_tracker.smart_tag_279"
      | "device_tracker.45_69_35_a9_55_58"
      | "device_tracker.6a_11_4c_0d_6b_46"
      | "device_tracker.4a_0a_0a_0a_2f_da"
      | "device_tracker.5f_31_3b_1c_b9_1a"
      | "device_tracker.78_6d_87_fa_bb_0c"
      | "device_tracker.4b_34_ab_e4_d4_de"
      | "device_tracker.40_e8_1c_6b_9c_c0"
      | "device_tracker.70_8f_b0_98_76_62"
      | "device_tracker.smart_tag_280"
      | "device_tracker.49_88_cb_78_3d_fe"
      | "device_tracker.4e_b6_42_de_33_16"
      | "device_tracker.52_f8_8d_bd_34_03"
      | "device_tracker.57_80_4b_4f_3b_f6"
      | "device_tracker.69_f5_bb_05_fe_28"
      | "device_tracker.smart_tag_281"
      | "device_tracker.78_32_97_63_20_3f"
      | "device_tracker.62_3d_29_28_7d_dd"
      | "device_tracker.7f_3f_3f_c8_97_d2"
      | "device_tracker.51_b3_62_33_e3_d5"
      | "device_tracker.6c_7d_b5_91_b9_06"
      | "device_tracker.42_42_42_1d_fa_29"
      | "device_tracker.smart_tag_282"
      | "device_tracker.71_94_26_fb_40_96"
      | "device_tracker.4f_0f_0f_38_75_c5"
      | "device_tracker.48_cf_f4_8e_09_bf"
      | "device_tracker.5f_02_2c_a6_cc_8f"
      | "device_tracker.67_08_1f_a0_bd_30"
      | "device_tracker.7c_ea_8b_2e_d8_c4"
      | "device_tracker.smart_tag_283"
      | "device_tracker.50_45_6f_a9_aa_b1"
      | "device_tracker.4a_52_5e_97_d4_e3"
      | "device_tracker.smart_tag_284"
      | "device_tracker.6f_7e_b6_de_17_dd"
      | "device_tracker.77_4d_70_c8_51_f4"
      | "device_tracker.4a_03_87_aa_54_b9"
      | "device_tracker.4e_4a_68_7d_be_26"
      | "device_tracker.6f_2a_28_64_5c_ac"
      | "device_tracker.67_19_bf_1a_a3_01"
      | "device_tracker.smart_tag_285"
      | "device_tracker.6d_ed_ed_cd_e4_9d"
      | "device_tracker.79_7e_7d_98_ac_81"
      | "device_tracker.68_80_34_73_a8_05"
      | "device_tracker.63_13_ad_24_d0_23"
      | "device_tracker.70_67_cc_fb_84_3d"
      | "device_tracker.52_76_64_74_59_13"
      | "device_tracker.44_a5_e7_3b_16_d9"
      | "device_tracker.7f_04_99_5f_ea_0b"
      | "device_tracker.smart_tag_286"
      | "device_tracker.6b_fa_32_68_df_68"
      | "device_tracker.77_64_2d_f3_49_46"
      | "device_tracker.6d_6d_6d_fb_79_c4"
      | "device_tracker.smart_tag_287"
      | "device_tracker.5d_81_fe_9c_6a_db"
      | "device_tracker.5e_52_b4_35_80_f7"
      | "device_tracker.46_8d_67_f4_90_52"
      | "device_tracker.7b_62_4e_2e_05_79"
      | "device_tracker.4b_32_0e_f5_37_b5"
      | "device_tracker.smart_tag_288"
      | "device_tracker.4c_32_74_30_2b_ac"
      | "device_tracker.7c_b7_92_54_ba_f4"
      | "device_tracker.45_5d_91_3c_4b_51"
      | "device_tracker.51_49_66_6d_c9_74"
      | "device_tracker.smart_tag_289"
      | "device_tracker.5c_b5_a1_39_73_17"
      | "device_tracker.48_dd_77_ab_c6_74"
      | "device_tracker.45_32_49_8f_3a_ba"
      | "device_tracker.75_40_05_39_94_8f"
      | "device_tracker.67_82_50_79_21_96"
      | "device_tracker.smart_tag_290"
      | "device_tracker.78_f8_78_fe_50_dd"
      | "device_tracker.52_8a_66_9d_f6_e0"
      | "device_tracker.61_99_85_74_5a_17"
      | "device_tracker.smart_tag_291"
      | "device_tracker.58_19_b8_79_05_61"
      | "device_tracker.4c_44_80_7d_21_cc"
      | "device_tracker.51_db_de_3d_40_ab"
      | "device_tracker.64_21_23_81_9a_ac"
      | "device_tracker.5e_cc_c5_da_2e_51"
      | "device_tracker.smart_tag_292"
      | "device_tracker.56_df_68_c8_bf_ed"
      | "device_tracker.58_c9_e1_54_46_e6"
      | "device_tracker.72_bc_3b_f4_60_aa"
      | "device_tracker.smart_tag_293"
      | "device_tracker.56_4e_02_22_a7_2e"
      | "device_tracker.45_f3_7f_4b_ed_1c"
      | "device_tracker.6a_c0_b5_5d_f7_97"
      | "device_tracker.5e_1a_18_2d_09_2d"
      | "device_tracker.59_93_f6_35_fb_49"
      | "device_tracker.smart_tag_294"
      | "device_tracker.66_5b_45_d7_3c_44"
      | "device_tracker.72_cc_33_cd_cb_2b"
      | "device_tracker.40_65_b7_b2_a6_ad"
      | "device_tracker.48_00_33_15_1c_c5"
      | "device_tracker.smart_tag_295"
      | "device_tracker.77_74_15_6a_a7_76"
      | "device_tracker.46_9d_90_55_57_d5"
      | "device_tracker.7a_aa_a2_e7_00_db"
      | "device_tracker.4c_81_a7_d7_01_58"
      | "device_tracker.7f_96_62_bf_ee_56"
      | "device_tracker.smart_tag_296"
      | "device_tracker.59_32_57_5f_27_aa"
      | "device_tracker.65_63_c0_7f_a8_61"
      | "device_tracker.4f_80_e7_ca_50_5a"
      | "device_tracker.77_c0_5b_41_89_4c"
      | "device_tracker.smart_tag_297"
      | "device_tracker.6e_69_70_bf_28_42"
      | "device_tracker.76_89_58_24_87_94"
      | "device_tracker.46_82_20_84_de_94"
      | "device_tracker.57_8a_84_a5_91_0a"
      | "device_tracker.5b_87_ed_4b_42_c2"
      | "device_tracker.45_36_25_43_6e_eb"
      | "device_tracker.7b_06_b8_0d_5a_82"
      | "device_tracker.smart_tag_298"
      | "device_tracker.46_b8_87_36_0e_7a"
      | "device_tracker.77_2a_c4_a8_0b_86"
      | "device_tracker.smart_tag_299"
      | "device_tracker.5a_93_ec_6e_ec_6c"
      | "device_tracker.52_42_ac_df_a4_27"
      | "device_tracker.62_4d_e5_10_b4_d6"
      | "device_tracker.4b_3f_41_49_7a_21"
      | "device_tracker.52_b4_e7_95_ad_18"
      | "device_tracker.65_b4_7c_3c_b7_32"
      | "device_tracker.7e_a9_36_9c_bc_52"
      | "device_tracker.5a_6b_b3_a8_ea_e9"
      | "device_tracker.66_68_8f_97_8e_ae"
      | "device_tracker.4c_4d_0d_f8_d0_f9"
      | "device_tracker.4d_31_af_35_bd_de"
      | "device_tracker.smart_tag_300"
      | "device_tracker.53_69_07_32_5e_13"
      | "device_tracker.5d_03_e9_af_25_70"
      | "device_tracker.4b_86_05_e0_22_f7"
      | "device_tracker.45_96_3f_00_63_b6"
      | "device_tracker.42_ce_32_54_87_1c"
      | "device_tracker.70_3c_a5_67_8e_86"
      | "device_tracker.68_79_91_16_2b_1c"
      | "device_tracker.72_e6_0f_e5_3d_66"
      | "device_tracker.42_6a_de_f3_ce_10"
      | "device_tracker.smart_tag_301"
      | "device_tracker.71_fc_40_23_69_9e"
      | "device_tracker.59_2c_d1_d9_62_4f"
      | "device_tracker.7f_b8_7b_84_54_a0"
      | "device_tracker.51_91_91_b2_1f_ab"
      | "device_tracker.45_c0_e2_8c_fe_f4"
      | "device_tracker.6c_04_d0_24_f2_1e"
      | "device_tracker.7b_6b_cf_5e_45_40"
      | "device_tracker.77_c6_7e_cf_4b_e5"
      | "device_tracker.62_7c_b3_ef_68_d6"
      | "device_tracker.51_2d_9d_16_2b_8c"
      | "device_tracker.6e_d4_c9_01_06_1c"
      | "device_tracker.smart_tag_302"
      | "device_tracker.78_ed_42_4f_e8_dd"
      | "device_tracker.7c_c7_01_df_45_aa"
      | "device_tracker.78_0a_c7_27_99_44"
      | "device_tracker.64_0a_9d_5a_9f_18"
      | "device_tracker.75_c2_59_72_0a_fb"
      | "device_tracker.6e_48_db_5f_c4_4a"
      | "device_tracker.6c_ab_48_68_93_d8"
      | "device_tracker.7c_b5_3c_c8_d5_75"
      | "device_tracker.50_c7_a3_d1_12_c6"
      | "device_tracker.smart_tag_303"
      | "device_tracker.67_27_3b_53_2d_0b"
      | "device_tracker.7b_f1_54_da_fd_1d"
      | "device_tracker.53_14_61_6e_25_7b"
      | "device_tracker.eb_6f_b5_2f_32_eb"
      | "device_tracker.72_83_5b_9a_74_17"
      | "device_tracker.57_14_75_2c_b0_40"
      | "device_tracker.6c_1e_2c_30_fa_1d"
      | "device_tracker.5f_0c_a5_2d_21_39"
      | "device_tracker.5c_b3_ea_ff_82_d2"
      | "device_tracker.smart_tag_304"
      | "device_tracker.6c_48_ba_14_82_b3"
      | "device_tracker.46_82_c6_e4_cc_12"
      | "device_tracker.4b_35_bc_7c_63_24"
      | "device_tracker.66_6d_c8_9d_f6_de"
      | "device_tracker.le_onyx_151"
      | "device_tracker.le_onyx_152"
      | "device_tracker.49_cb_0a_b9_39_2d"
      | "device_tracker.5f_10_b7_6f_a1_7b"
      | "device_tracker.5d_dc_13_c3_a6_8d"
      | "device_tracker.5c_5b_98_05_31_a8"
      | "device_tracker.74_20_ea_5d_0b_19"
      | "device_tracker.6d_ef_8e_b5_5b_cf"
      | "device_tracker.4d_2f_7e_77_f3_66"
      | "device_tracker.54_86_5d_77_e8_27"
      | "device_tracker.47_bc_41_03_6d_54"
      | "device_tracker.6e_af_37_bb_d5_ab"
      | "device_tracker.74_da_8d_e4_36_11"
      | "device_tracker.76_7b_1d_ec_fc_fd"
      | "device_tracker.74_1f_74_9a_a9_c7"
      | "device_tracker.43_38_85_ec_48_79"
      | "device_tracker.47_8a_ec_c3_3b_f3"
      | "device_tracker.46_99_0c_63_a4_35"
      | "device_tracker.50_40_59_d3_c1_9a"
      | "device_tracker.68_8b_5a_66_8a_5f"
      | "device_tracker.7d_bd_7d_be_cf_66"
      | "device_tracker.79_fa_fb_9c_c2_f0"
      | "device_tracker.44_0b_ac_33_01_96"
      | "device_tracker.4f_70_31_8a_d8_29"
      | "device_tracker.79_50_78_d5_b4_34"
      | "device_tracker.4c_72_2d_a1_2f_2d"
      | "device_tracker.79_c8_10_54_2d_5c"
      | "device_tracker.41_0a_fd_1c_8f_20"
      | "device_tracker.48_b7_e8_6c_9e_86"
      | "device_tracker.42_a3_0f_56_3f_94"
      | "device_tracker.7e_59_a3_48_71_8b"
      | "device_tracker.40_98_f4_55_f3_92"
      | "device_tracker.4c_c7_e1_d8_ae_b5"
      | "device_tracker.6b_a7_41_eb_38_50"
      | "device_tracker.51_2b_e0_9d_6e_71"
      | "device_tracker.75_48_76_1a_f7_60"
      | "device_tracker.56_ee_f2_45_f0_76"
      | "device_tracker.44_e1_d3_50_1d_ce"
      | "device_tracker.6a_16_b1_13_85_c9"
      | "device_tracker.65_99_22_be_cf_53"
      | "device_tracker.6b_68_09_9b_ce_c1"
      | "device_tracker.62_e9_6c_ad_d4_66"
      | "device_tracker.63_09_3c_04_cf_51"
      | "device_tracker.6c_23_44_e0_72_29"
      | "device_tracker.71_7d_3b_d8_e0_8a"
      | "device_tracker.4e_9a_70_24_c1_5f"
      | "device_tracker.68_5a_03_d6_dc_d3"
      | "device_tracker.54_e2_59_c3_74_d9"
      | "device_tracker.52_ae_b0_a0_6c_bd"
      | "device_tracker.49_b1_cd_db_c9_9c"
      | "device_tracker.6a_82_76_88_a9_c9"
      | "device_tracker.64_30_3a_f1_ed_a9"
      | "device_tracker.7d_f4_bf_07_bc_d6"
      | "device_tracker.78_d0_24_2f_50_cd"
      | "device_tracker.56_2c_91_07_da_29"
      | "device_tracker.52_3e_08_f5_26_8a"
      | "device_tracker.79_6d_07_23_c1_46"
      | "device_tracker.45_08_ae_5e_ca_9a"
      | "device_tracker.6d_d7_ca_21_6e_cf"
      | "device_tracker.50_4f_c0_0d_0b_6a"
      | "device_tracker.71_52_d5_b9_70_11"
      | "device_tracker.7b_ae_44_38_53_ca"
      | "device_tracker.4f_6b_39_f3_b3_3b"
      | "device_tracker.58_bd_cf_e4_de_0d"
      | "device_tracker.63_09_3c_6a_c9_4b"
      | "device_tracker.62_5e_65_ef_1c_9a"
      | "device_tracker.6d_a5_41_f2_cb_8e"
      | "device_tracker.63_25_66_fd_6f_15"
      | "device_tracker.77_fa_3c_0c_9c_58"
      | "device_tracker.77_2a_04_d6_e3_ec"
      | "device_tracker.73_4c_33_ff_3e_a8"
      | "device_tracker.57_39_4e_e3_c2_ff"
      | "device_tracker.7f_14_61_21_89_12"
      | "device_tracker.78_a7_08_33_7d_b7"
      | "device_tracker.55_3f_0a_09_08_5b"
      | "device_tracker.54_74_04_ea_88_da"
      | "device_tracker.5e_34_41_7d_f8_4e"
      | "device_tracker.77_b0_73_08_43_44"
      | "device_tracker.67_ec_69_45_28_cf"
      | "device_tracker.62_0d_ba_2a_da_1a"
      | "device_tracker.77_47_3f_20_b2_f5"
      | "device_tracker.72_f2_b2_78_bd_f0"
      | "device_tracker.4c_a4_8f_5c_a0_33"
      | "device_tracker.77_59_d6_d5_f9_91"
      | "device_tracker.5d_a1_ff_e2_68_6e"
      | "device_tracker.7d_8e_17_88_c2_22"
      | "device_tracker.7e_54_21_16_2d_e3"
      | "device_tracker.7e_e2_ac_83_1c_78"
      | "device_tracker.76_12_a0_f0_7a_49"
      | "device_tracker.6e_fd_db_a4_5f_dc"
      | "device_tracker.62_81_30_5f_df_e1"
      | "device_tracker.75_87_7e_7e_38_ac"
      | "device_tracker.5c_a3_fc_b3_67_01"
      | "device_tracker.56_30_23_69_ad_a8"
      | "device_tracker.62_a1_c0_b8_0c_44"
      | "device_tracker.68_de_ad_3b_fd_3b"
      | "device_tracker.6c_bb_70_42_b4_3b"
      | "device_tracker.6b_68_c9_69_54_32"
      | "device_tracker.65_69_8f_f4_8d_8c"
      | "device_tracker.46_6e_a6_b9_1e_d7"
      | "device_tracker.6a_5d_06_11_5e_f3"
      | "device_tracker.62_7c_33_44_c5_3d"
      | "device_tracker.5a_12_56_d8_3e_c7"
      | "device_tracker.52_04_8f_05_e8_0b"
      | "device_tracker.59_b1_65_3a_b4_e4"
      | "device_tracker.70_3a_df_4d_61_77"
      | "device_tracker.6e_78_53_8f_17_d2"
      | "device_tracker.64_ef_ea_02_59_15"
      | "device_tracker.61_08_3c_93_59_82"
      | "device_tracker.4d_4b_64_ba_9c_39"
      | "device_tracker.62_9b_e7_99_93_7c"
      | "device_tracker.62_ae_28_6f_eb_63"
      | "device_tracker.63_1e_40_9b_ca_36"
      | "device_tracker.4d_7e_01_5a_8f_99"
      | "device_tracker.7c_c9_d3_0a_c6_dc"
      | "device_tracker.44_02_81_34_00_80"
      | "device_tracker.5e_10_77_3d_bb_68"
      | "device_tracker.7d_a1_ef_91_35_67"
      | "device_tracker.4f_66_32_0f_2e_24"
      | "device_tracker.40_46_c5_37_c3_16"
      | "device_tracker.41_09_cd_8a_40_24"
      | "device_tracker.5f_a0_3f_8a_b7_c2"
      | "device_tracker.5b_9f_98_f1_2a_6b"
      | "device_tracker.4b_df_d2_f1_ed_76"
      | "device_tracker.50_a9_d5_9a_5a_d9"
      | "device_tracker.46_51_7a_d9_0b_04"
      | "device_tracker.45_3b_04_38_b4_37"
      | "device_tracker.7e_26_0a_f1_41_1e"
      | "device_tracker.61_e3_cc_b7_35_66"
      | "device_tracker.46_c0_a3_e9_01_22"
      | "device_tracker.4c_52_83_9f_57_46"
      | "device_tracker.6e_71_1e_f5_cd_9d"
      | "device_tracker.76_12_20_7d_ec_bf"
      | "device_tracker.45_6b_bc_d0_66_1c"
      | "device_tracker.67_81_04_35_33_90"
      | "device_tracker.64_30_cc_0a_34_7b"
      | "device_tracker.69_f1_3d_02_6a_da"
      | "device_tracker.6f_69_2a_4f_3b_d6"
      | "device_tracker.5d_75_ce_88_e9_16"
      | "device_tracker.79_bf_7e_be_a8_41"
      | "device_tracker.63_ea_20_77_cb_e8"
      | "device_tracker.le_onyx_153"
      | "device_tracker.le_onyx_154"
      | "device_tracker.62_e1_c0_f7_9b_38"
      | "device_tracker.66_b4_d6_82_8a_51"
      | "device_tracker.le_onyx_155"
      | "device_tracker.7a_04_7b_6f_46_a8"
      | "device_tracker.4c_56_bb_a1_9a_c1"
      | "device_tracker.46_28_24_48_00_f8"
      | "device_tracker.64_e3_31_c9_50_2b"
      | "device_tracker.4c_5c_74_24_a9_60"
      | "device_tracker.60_9c_16_b5_b6_cc"
      | "device_tracker.54_29_cc_52_b4_14"
      | "device_tracker.5e_cc_e5_6c_37_58"
      | "device_tracker.44_c1_c3_db_69_44"
      | "device_tracker.le_onyx_156"
      | "device_tracker.le_onyx_157"
      | "device_tracker.48_a7_e7_b2_ca_92"
      | "device_tracker.7a_57_95_d5_67_3f"
      | "device_tracker.50_60_71_d4_f6_2e"
      | "device_tracker.53_56_34_e1_e2_a7"
      | "device_tracker.76_cb_15_6d_ec_ff"
      | "device_tracker.53_1d_3f_96_8a_8e"
      | "device_tracker.60_93_aa_ba_0c_23"
      | "device_tracker.58_7f_ec_9d_5d_7d"
      | "device_tracker.4b_dc_f7_6c_fa_bf"
      | "device_tracker.le_onyx_158"
      | "device_tracker.74_42_78_ee_c6_35"
      | "device_tracker.71_62_ab_a8_a7_12"
      | "device_tracker.6a_ec_9a_7f_e1_2f"
      | "device_tracker.47_40_e3_b7_0d_62"
      | "device_tracker.7f_8c_55_24_36_54"
      | "device_tracker.le_onyx_159"
      | "device_tracker.4a_8e_44_0e_94_dd"
      | "device_tracker.6e_b8_44_b6_5c_4f"
      | "device_tracker.6c_ef_ee_e7_36_df"
      | "device_tracker.78_f8_58_15_1b_e9"
      | "device_tracker.75_8a_ce_57_9a_4c"
      | "device_tracker.62_e4_e7_ef_7c_a3"
      | "device_tracker.5f_8c_c5_4f_59_41"
      | "device_tracker.66_c0_93_71_34_48"
      | "device_tracker.55_ee_33_f8_93_a0"
      | "device_tracker.56_35_48_d4_0f_5c"
      | "device_tracker.7f_ba_78_de_e0_cb"
      | "device_tracker.4f_62_d4_9a_42_25"
      | "device_tracker.7c_c4_52_0e_53_a6"
      | "device_tracker.68_94_ae_58_32_78"
      | "device_tracker.72_88_95_8d_43_e6"
      | "device_tracker.46_ed_98_b1_e5_dc"
      | "device_tracker.58_19_b9_ce_ac_ac"
      | "device_tracker.44_c8_5c_f1_7e_5c"
      | "device_tracker.6f_b0_df_a5_dd_a0"
      | "device_tracker.77_b5_50_6f_c7_a9"
      | "device_tracker.4f_2b_59_03_9f_5c"
      | "device_tracker.78_90_c4_d2_3a_d7"
      | "device_tracker.58_71_56_48_f6_c5"
      | "device_tracker.6e_3c_ef_4e_9d_ea"
      | "device_tracker.52_fe_68_18_05_3a"
      | "device_tracker.6d_41_b7_0c_7f_42"
      | "device_tracker.6f_5b_9c_6c_90_bf"
      | "device_tracker.7e_ff_10_f4_d4_3d"
      | "device_tracker.51_ff_28_ca_b4_fe"
      | "device_tracker.4d_8c_2c_0f_ef_f6"
      | "device_tracker.75_7d_79_14_36_7e"
      | "device_tracker.44_55_dd_b5_a7_0b"
      | "device_tracker.46_52_f8_21_8f_55"
      | "device_tracker.42_aa_94_1f_4f_3c"
      | "device_tracker.6d_dd_bb_cb_7b_af"
      | "device_tracker.7a_6f_51_dc_f9_66"
      | "device_tracker.40_1a_9c_69_c7_58"
      | "device_tracker.5f_07_cb_92_b4_95"
      | "device_tracker.5d_69_31_d1_a6_00"
      | "device_tracker.67_3f_0f_47_a9_97"
      | "device_tracker.5d_39_6b_08_3b_4d"
      | "device_tracker.69_23_a6_4d_b0_07"
      | "device_tracker.smart_tag_305"
      | "device_tracker.4e_d8_90_45_0e_42"
      | "device_tracker.smart_tag_306"
      | "device_tracker.6a_e6_2a_3a_f5_e1"
      | "device_tracker.7d_11_da_d1_2a_0c"
      | "device_tracker.44_c4_b4_85_2f_52"
      | "device_tracker.6e_6d_c6_d4_00_59"
      | "device_tracker.49_ef_22_37_33_88"
      | "alarm_control_panel.alarmo"
      | "sensor.rack_energy_2"
      | "sensor.rack_energy_2_daily"
      | "sensor.rack_energy_2_weekly"
      | "sensor.rack_energy_2_monthly"
      | "sensor.garderob_spot_2_power"
      | "sensor.garderob_spot_2_energy"
      | "sensor.garderob_spot_2_energy_daily"
      | "sensor.garderob_spot_2_energy_weekly"
      | "sensor.garderob_spot_2_energy_monthly"
      | "sensor.garderob_spot_3_power"
      | "sensor.garderob_spot_3_energy"
      | "sensor.garderob_spot_3_energy_daily"
      | "sensor.garderob_spot_3_energy_weekly"
      | "sensor.garderob_spot_3_energy_monthly"
      | "sensor.hall_spot_2_power"
      | "sensor.hall_spot_2_energy"
      | "sensor.hall_spot_2_energy_daily"
      | "sensor.hall_spot_2_energy_weekly"
      | "sensor.hall_spot_2_energy_monthly"
      | "sensor.garderob_spot_1_power"
      | "sensor.garderob_spot_1_energy"
      | "sensor.garderob_spot_1_energy_daily"
      | "sensor.garderob_spot_1_energy_weekly"
      | "sensor.garderob_spot_1_energy_monthly"
      | "sensor.slinga_vardagsrum_power"
      | "sensor.slinga_vardagsrum_energy"
      | "sensor.slinga_vardagsrum_energy_daily"
      | "sensor.slinga_vardagsrum_energy_weekly"
      | "sensor.slinga_vardagsrum_energy_monthly"
      | "sensor.fonster_2_vardagsrum_power"
      | "sensor.fonster_2_vardagsrum_energy"
      | "sensor.fonster_2_vardagsrum_energy_daily"
      | "sensor.fonster_2_vardagsrum_energy_weekly"
      | "sensor.fonster_2_vardagsrum_energy_monthly"
      | "sensor.kok_slinga_power"
      | "sensor.kok_slinga_energy"
      | "sensor.kok_slinga_energy_daily"
      | "sensor.kok_slinga_energy_weekly"
      | "sensor.kok_slinga_energy_monthly"
      | "sensor.hall_spot_3_power"
      | "sensor.hall_spot_3_energy"
      | "sensor.hall_spot_3_energy_daily"
      | "sensor.hall_spot_3_energy_weekly"
      | "sensor.hall_spot_3_energy_monthly"
      | "sensor.kontor_tak_power"
      | "sensor.kontor_tak_energy"
      | "sensor.kontor_tak_energy_daily"
      | "sensor.kontor_tak_energy_weekly"
      | "sensor.kontor_tak_energy_monthly"
      | "sensor.fonster_1_vardagsrum_power"
      | "sensor.fonster_1_vardagsrum_energy"
      | "sensor.fonster_1_vardagsrum_energy_daily"
      | "sensor.fonster_1_vardagsrum_energy_weekly"
      | "sensor.fonster_1_vardagsrum_energy_monthly"
      | "sensor.hall_spot_1_power"
      | "sensor.hall_spot_1_energy"
      | "sensor.hall_spot_1_energy_daily"
      | "sensor.hall_spot_1_energy_weekly"
      | "sensor.hall_spot_1_energy_monthly"
      | "sensor.kok_power_2"
      | "sensor.kok_energy_2"
      | "sensor.kok_energy_2_daily"
      | "sensor.kok_energy_2_weekly"
      | "sensor.kok_energy_2_monthly"
      | "sensor.kok_tak_power"
      | "sensor.kok_tak_energy"
      | "sensor.kok_tak_energy_daily"
      | "sensor.kok_tak_energy_weekly"
      | "sensor.kok_tak_energy_monthly"
      | "sensor.hallen_power_2"
      | "sensor.hallen_energy_2"
      | "sensor.hallen_energy_2_daily"
      | "sensor.hallen_energy_2_weekly"
      | "sensor.hallen_energy_2_monthly"
      | "sensor.knapp_badrum_device_power"
      | "sensor.knapp_badrum_device_energy"
      | "sensor.vardagsrum_power_2"
      | "sensor.vardagsrum_energy_2"
      | "sensor.vardagsrum_energy_2_daily"
      | "sensor.vardagsrum_energy_2_weekly"
      | "sensor.vardagsrum_energy_2_monthly"
      | "sensor.sovrum_tak_power"
      | "sensor.sovrum_tak_energy"
      | "sensor.sovrum_tak_energy_daily"
      | "sensor.sovrum_tak_energy_weekly"
      | "sensor.sovrum_tak_energy_monthly"
      | "sensor.vardagsrum_lampa_device_power"
      | "sensor.vardagsrum_lampa_device_energy"
      | "sensor.vardagsrum_lampa_device_energy_daily"
      | "sensor.vardagsrum_lampa_device_energy_weekly"
      | "sensor.vardagsrum_lampa_device_energy_monthly"
      | "sensor.lampor_badrum_device_power"
      | "sensor.lampor_badrum_device_energy"
      | "sensor.lampor_badrum_device_energy_daily"
      | "sensor.lampor_badrum_device_energy_weekly"
      | "sensor.lampor_badrum_device_energy_monthly"
      | "sensor.rack_device_power"
      | "sensor.rack_device_energy"
      | "sensor.rack_device_energy_daily"
      | "sensor.rack_device_energy_weekly"
      | "sensor.rack_device_energy_monthly"
      | "sensor.badrum_device_power"
      | "sensor.badrum_device_energy"
      | "sensor.badrum_device_energy_daily"
      | "sensor.badrum_device_energy_weekly"
      | "sensor.badrum_device_energy_monthly"
      | "sensor.vardagsrum_tak_device_power"
      | "sensor.vardagsrum_tak_device_energy"
      | "sensor.vardagsrum_tak_device_energy_daily"
      | "sensor.vardagsrum_tak_device_energy_weekly"
      | "sensor.vardagsrum_tak_device_energy_monthly"
      | "calendar.boka_tvattid"
      | "calendar.familj"
      | "calendar.benjamin_sanden2_gmail_com"
      | "calendar.birthdays"
      | "calendar.helgdagar_i_sverige"
      | "sensor.sanglampa_vanster_power"
      | "sensor.sanglampa_vanster_energy"
      | "sensor.sanglampa_vanster_energy_daily"
      | "sensor.sanglampa_vanster_energy_weekly"
      | "sensor.sanglampa_vanster_energy_monthly"
      | "sensor.sanglampa_hoger_power"
      | "sensor.sanglampa_hoger_energy"
      | "sensor.sanglampa_hoger_energy_daily"
      | "sensor.sanglampa_hoger_energy_weekly"
      | "sensor.sanglampa_hoger_energy_monthly"
      | "binary_sensor.kok_sensor_occupancy"
      | "sensor.alla_lampor_power"
      | "sensor.alla_lampor_energy"
      | "sensor.alla_lampor_energy_daily"
      | "sensor.alla_lampor_energy_weekly"
      | "sensor.alla_lampor_energy_monthly"
      | "sensor.kyl_power"
      | "sensor.kyl_energy"
      | "sensor.kyl_energy_daily"
      | "sensor.kyl_energy_weekly"
      | "sensor.kyl_energy_monthly"
      | "sensor.vitvaror_power"
      | "sensor.vitvaror_energy"
      | "sensor.vitvaror_energy_daily"
      | "sensor.vitvaror_energy_weekly"
      | "sensor.vitvaror_energy_monthly"
      | "sensor.luftrenare_power"
      | "sensor.luftrenare_energy"
      | "sensor.luftrenare_energy_daily"
      | "sensor.luftrenare_energy_weekly"
      | "sensor.luftrenare_energy_monthly"
      | "sensor.luftrenare_power_2"
      | "sensor.luftrenare_energy_2"
      | "sensor.luftrenare_energy_daily_2"
      | "sensor.luftrenare_energy_weekly_2"
      | "sensor.luftrenare_energy_monthly_2"
      | "sensor.server_power"
      | "sensor.server_energy"
      | "sensor.server_energy_daily"
      | "sensor.server_energy_weekly"
      | "sensor.server_energy_monthly"
      | "sensor.tjanstefordelare_power"
      | "sensor.tjanstefordelare_energy"
      | "sensor.tjanstefordelare_energy_daily"
      | "sensor.tjanstefordelare_energy_weekly"
      | "sensor.tjanstefordelare_energy_monthly"
      | "sensor.internet_power"
      | "sensor.internet_energy"
      | "sensor.internet_energy_daily"
      | "sensor.internet_energy_weekly"
      | "sensor.internet_energy_monthly"
      | "sensor.enheter_alltid_pa_power"
      | "sensor.enheter_alltid_pa_energy"
      | "sensor.enheter_alltid_pa_energy_daily"
      | "sensor.enheter_alltid_pa_energy_weekly"
      | "sensor.enheter_alltid_pa_energy_monthly"
      | "sensor.hallen_power"
      | "sensor.hallen_energy"
      | "sensor.hallen_energy_daily"
      | "sensor.hallen_energy_weekly"
      | "sensor.hallen_energy_monthly"
      | "sensor.kok_power"
      | "sensor.kok_energy"
      | "sensor.kok_energy_daily"
      | "sensor.kok_energy_weekly"
      | "sensor.kok_energy_monthly"
      | "sensor.sovrum_power"
      | "sensor.sovrum_energy"
      | "sensor.sovrum_energy_daily"
      | "sensor.sovrum_energy_weekly"
      | "sensor.sovrum_energy_monthly"
      | "sensor.vardagsrum_power"
      | "sensor.vardagsrum_energy"
      | "sensor.vardagsrum_energy_daily"
      | "sensor.vardagsrum_energy_weekly"
      | "sensor.vardagsrum_energy_monthly"
      | "sensor.alla_hogtalare_power"
      | "sensor.alla_hogtalare_energy"
      | "sensor.alla_hogtalare_energy_daily"
      | "sensor.alla_hogtalare_energy_weekly"
      | "sensor.alla_hogtalare_energy_monthly"
      | "sensor.tv_vardagsrum_power"
      | "sensor.tv_vardagsrum_energy"
      | "sensor.tv_vardagsrum_energy_daily"
      | "sensor.tv_vardagsrum_energy_weekly"
      | "sensor.tv_vardagsrum_energy_monthly"
      | "sensor.xbox_vardagsrum_remote_power"
      | "sensor.xbox_vardagsrum_remote_energy"
      | "sensor.xbox_vardagsrum_remote_energy_daily"
      | "sensor.xbox_vardagsrum_remote_energy_weekly"
      | "sensor.xbox_vardagsrum_remote_energy_monthly"
      | "sensor.tv_power"
      | "sensor.tv_energy"
      | "sensor.tv_energy_daily"
      | "sensor.tv_energy_weekly"
      | "sensor.tv_energy_monthly"
      | "sensor.samsung_s21_power_5"
      | "sensor.samsung_s21_energy_5"
      | "sensor.samsung_s21_energy_5_daily"
      | "sensor.samsung_s21_energy_5_weekly"
      | "sensor.samsung_s21_energy_5_monthly"
      | "sensor.iphone_power"
      | "sensor.iphone_energy"
      | "sensor.iphone_energy_daily"
      | "sensor.iphone_energy_weekly"
      | "sensor.iphone_energy_monthly"
      | "sensor.smartklocka_power"
      | "sensor.smartklocka_energy"
      | "sensor.smartklocka_energy_daily"
      | "sensor.smartklocka_energy_weekly"
      | "sensor.smartklocka_energy_monthly"
      | "sensor.telefoner_laddar_power"
      | "sensor.telefoner_laddar_energy"
      | "sensor.telefoner_laddar_energy_daily"
      | "sensor.telefoner_laddar_energy_weekly"
      | "sensor.telefoner_laddar_energy_monthly"
      | "sensor.bertil_power"
      | "sensor.bertil_energy"
      | "sensor.bertil_energy_daily"
      | "sensor.bertil_energy_weekly"
      | "sensor.bertil_energy_monthly"
      | "sensor.dammsugare_power"
      | "sensor.dammsugare_energy"
      | "sensor.dammsugare_energy_daily"
      | "sensor.dammsugare_energy_weekly"
      | "sensor.dammsugare_energy_monthly"
      | "sensor.anvanda_enheter_power"
      | "sensor.anvanda_enheter_energy"
      | "sensor.anvanda_enheter_energy_daily"
      | "sensor.anvanda_enheter_energy_weekly"
      | "sensor.anvanda_enheter_energy_monthly"
      | "sensor.all_uppskattad_anvandning_power"
      | "sensor.all_uppskattad_anvandning_energy"
      | "sensor.all_uppskattad_anvandning_energy_daily"
      | "sensor.all_uppskattad_anvandning_energy_weekly"
      | "sensor.all_uppskattad_anvandning_energy_monthly"
      | "binary_sensor.sensor_vardagsrum_occupancy"
      | "binary_sensor.sensor_vardagsrum_battery_low"
      | "binary_sensor.kontor_occupancy"
      | "binary_sensor.kontor_illuminance_above_threshold"
      | "binary_sensor.brevlada_occupancy"
      | "binary_sensor.brevlada_illuminance_above_threshold"
      | "binary_sensor.dorr_kontor_contact"
      | "binary_sensor.dorr_kontor_battery_low"
      | "binary_sensor.garderob_rorelse_battery_low"
      | "binary_sensor.garderob_rorelse_tamper"
      | "binary_sensor.garderob_rorelse_alarm_1"
      | "binary_sensor.garderob_rorelse_alarm_2"
      | "binary_sensor.badrum_battery_low"
      | "binary_sensor.badrum_tamper"
      | "binary_sensor.badrum_occupancy"
      | "binary_sensor.badrum_alarm_2"
      | "binary_sensor.rullgardin_sovrum_charging_status"
      | "binary_sensor.rullgardin_sovrum_running"
      | "binary_sensor.sovrum_sensor_occupancy"
      | "binary_sensor.ytterdorr_contact"
      | "binary_sensor.ytterdorr_battery_low"
      | "binary_sensor.zigbee2mqtt_bridge_connection_state"
      | "binary_sensor.zigbee2mqtt_bridge_connection_state_2"
      | "binary_sensor.matskal_occupancy"
      | "button.kontor_identify"
      | "button.kontor_tak_identify"
      | "button.vardagsrum_kontroll_identify"
      | "button.brevlada_identify"
      | "button.vask_identify"
      | "button.skafferi_identify"
      | "button.matskal_identify"
      | "button.zigbee2mqtt_bridge_restart"
      | "button.skotbord_identify"
      | "cover.rullgardin_sovrum"
      | "light.hall_spot_1"
      | "light.hall_spot_2"
      | "light.hall_spot_3"
      | "light.slinga_vardagsrum"
      | "light.hall"
      | "light.vardagsrum"
      | "light.kok_slinga"
      | "light.sovrum_tak"
      | "light.garderob_spot_1"
      | "light.garderob_spot_2"
      | "light.garderob_spot_3"
      | "light.garderob"
      | "light.kok"
      | "light.kontor_tak"
      | "light.vask"
      | "light.skafferi"
      | "light.kok_tak"
      | "light.sanglampa_vanster"
      | "light.sanglampa_hoger"
      | "light.sovrum"
      | "number.kok_sensor_occupancy_timeout"
      | "select.hall_spot_1_power_on_behavior"
      | "select.hall_spot_2_power_on_behavior"
      | "select.hall_spot_3_power_on_behavior"
      | "select.slinga_vardagsrum_power_on_behavior"
      | "select.kok_slinga_power_on_behavior"
      | "select.kok_sensor_motion_sensitivity"
      | "select.sovrum_tak_power_on_behavior"
      | "select.garderob_spot_1_power_on_behavior"
      | "select.garderob_spot_2_power_on_behavior"
      | "select.garderob_spot_3_power_on_behavior"
      | "select.kontor_tak_power_on_behavior"
      | "select.vask_power_on_behavior"
      | "select.skafferi_power_on_behavior"
      | "select.kok_tak_power_on_behavior"
      | "select.rullgardin_sovrum_motor_speed"
      | "select.sanglampa_vanster_power_on_behavior"
      | "select.sanglampa_hoger_power_on_behavior"
      | "select.zigbee2mqtt_bridge_log_level"
      | "select.skotbord_power_on_behavior"
      | "sensor.dimmer_sovrum_battery"
      | "sensor.kok_sensor_temperature"
      | "sensor.kok_sensor_battery"
      | "sensor.sensor_vardagsrum_battery"
      | "sensor.kontor_battery"
      | "sensor.brevlada_battery"
      | "sensor.dorr_kontor_battery"
      | "sensor.garderob_rorelse_battery"
      | "sensor.badrum_battery"
      | "sensor.rullgardin_sovrum_battery"
      | "sensor.rullgardin_sovrum_device_temperature"
      | "sensor.rullgardin_sovrum_motor_state"
      | "sensor.vardagsrum_kontroll_battery"
      | "sensor.sovrum_sensor_battery"
      | "sensor.sovrum_sensor_device_temperature"
      | "sensor.sovrum_sensor_power_outage_count"
      | "sensor.ytterdorr_battery"
      | "sensor.kontor_tak_color_options"
      | "sensor.rack_battery"
      | "sensor.rack_temperature"
      | "sensor.rack_humidity"
      | "sensor.matskal_battery"
      | "sensor.zigbee2mqtt_bridge_version"
      | "switch.kok_sensor_led_indication"
      | "switch.lampor_badrum"
      | "switch.vardagsrum_lampa"
      | "switch.zigbee2mqtt_bridge_permit_join"
      | "switch.skotbord"
      | "update.dimmer_sovrum"
      | "update.hall_spot_1"
      | "update.hall_spot_2"
      | "update.hall_spot_3"
      | "update.slinga_vardagsrum"
      | "update.kok_slinga"
      | "update.kok_sensor"
      | "update.sovrum_tak"
      | "update.garderob_spot_1"
      | "update.garderob_spot_2"
      | "update.garderob_spot_3"
      | "update.kontor"
      | "update.brevlada"
      | "update.rullgardin_sovrum"
      | "update.vardagsrum_kontroll"
      | "update.kontor_tak"
      | "update.vask"
      | "update.skafferi"
      | "update.kok_tak"
      | "update.sanglampa_vanster"
      | "update.sanglampa_hoger"
      | "update.matskal"
      | "update.skotbord"
      | "binary_sensor.underseaegg3955"
      | "binary_sensor.cavatorsk"
      | "binary_sensor.skillman1328"
      | "binary_sensor.marshmallow3690"
      | "automation.vardagsrum_minska_ljus_vid_tv"
      | "automation.pausa_musik_cast"
      | "automation.godnatt"
      | "automation.kom_hem"
      | "automation.lamna_hem"
      | "automation.hem_satt_volym_kl_21"
      | "automation.hem_satt_volym_kl_7"
      | "automation.hem_spela_musik_kl_9"
      | "automation.hem_spela_musik_06_40"
      | "automation.vardagsrum_xbox_pa"
      | "automation.sovrum_i_sangen"
      | "automation.sovrum_plattang_av"
      | "automation.sovrum_i_sangen_av"
      | "automation.hem_hogtalare_spela_mys"
      | "automation.ny_automation_2"
      | "automation.mobil_idle_volym"
      | "automation.sovrum_godnatt_timer_klar"
      | "automation.sovrum_natt_musik_stopp"
      | "automation.hall_timer_av"
      | "automation.hall_rorelse_pa"
      | "automation.hall_rorelse_av"
      | "automation.hem_07_10_slang_soporna"
      | "automation.vardagsrum_rorelse_pa"
      | "automation.vardagsrum_timer"
      | "automation.vardagsrum_timer_av"
      | "automation.hem_sla_pa_musik_helg_knapp"
      | "automation.kok_timer_av"
      | "automation.nha_satt_pa_dummy_light"
      | "automation.kok_volym_kl_6"
      | "automation.sovrum_dimmer_2"
      | "automation.internet_wan_nere"
      | "automation.brevlada_offline"
      | "automation.brevlada_online"
      | "automation.kok_av_kvall"
      | "automation.kontor_rorelse_pa"
      | "automation.kontor_rorelse_av"
      | "automation.ny_automation_5"
      | "automation.sovrum_rorelse_av"
      | "automation.sovrum_timer"
      | "automation.vacuum_paused_return_to_dock"
      | "automation.vacuum_notify_on_error"
      | "automation.dammsugare_13_00_nagon_hemma"
      | "automation.kok_dammsugare_efter_mat"
      | "automation.dammsugare_18_00"
      | "automation.dammsugare_notis_dockar"
      | "automation.vardagar_stang_av_tv"
      | "automation.dammsugare_sovrum_hastighet"
      | "automation.dammsugare_hall_hastighet"
      | "automation.dammsugare_kontor_hastighet"
      | "automation.dammsugare_vardagsrum_hastighet"
      | "automation.dammsugare_kok_hastighet"
      | "automation.semester_av"
      | "automation.medicin_wilma"
      | "automation.hem_jarvis_halsa1"
      | "automation.hem_dammsuga_lamna_hem"
      | "automation.hem_godmorgon"
      | "automation.ha_update_hacs_4_hours"
      | "automation.update_restart"
      | "automation.hem_wilma_sover_pausa_musik"
      | "automation.kok_lagar_mat_lampa_pa"
      | "automation.kok_lagar_mat_av_lampa_av"
      | "automation.jarvis_stanger_av_tv"
      | "automation.badrum_lampor_pa"
      | "automation.badrum_timer_av"
      | "automation.automation_95"
      | "automation.garderob_rorelse_av"
      | "automation.sovrum_soluppgang_gardin_oppna"
      | "automation.sovrum_solljus_helg_gardin_upp"
      | "automation.solnedgang_julstjarna"
      | "automation.varna_dorr"
      | "automation.vattenskal_pa"
      | "automation.vattenskal_timer"
      | "automation.vattenskal_timer_av"
      | "automation.dammsugare_stadar_larma_hemma"
      | "automation.dammsugare_klar_larma_borta"
      | "automation.larm_bertil_hemma_2"
      | "automation.ha_zigbee_nere_notis"
      | "automation.adaptive_lightning_sovrum_pa"
      | "automation.github_backup"
      | "automation.rack_temperatur_notis"
      | "automation.notify_time_alerts"
      | "automation.tv_starta_jellyfin"
      | "automation.reload_android_tv"
      | "automation.rorelse_lampa_pa_kok"
      | "automation.lampa_av_kontor"
      | "automation.kok_rorelse_av_starta_timer"
      | "button.ignore_all_issues"
      | "button.unignore_all_issues"
      | "button.homeassistant_restart"
      | "button.homeassistant_reload"
      | "event.repair"
      | "sensor.issues"
      | "sensor.active_issues"
      | "sensor.ignored_issues"
      | "sensor.air_quality"
      | "sensor.alarm_control_panels"
      | "sensor.areas"
      | "sensor.automations"
      | "sensor.binary_sensors"
      | "sensor.buttons"
      | "sensor.calendars"
      | "sensor.cameras"
      | "sensor.climate"
      | "sensor.covers"
      | "sensor.dates"
      | "sensor.datetimes"
      | "sensor.devices"
      | "sensor.device_trackers"
      | "sensor.entities"
      | "sensor.fans"
      | "sensor.humidifiers"
      | "sensor.integrations"
      | "sensor.custom_integrations"
      | "sensor.input_booleans"
      | "sensor.input_buttons"
      | "sensor.input_datetimes"
      | "sensor.input_numbers"
      | "sensor.input_selects"
      | "sensor.input_texts"
      | "sensor.images"
      | "sensor.lights"
      | "sensor.locks"
      | "sensor.media_players"
      | "sensor.numbers"
      | "sensor.persistent_notifications"
      | "sensor.persons"
      | "sensor.remotes"
      | "sensor.scenes"
      | "sensor.scripts"
      | "sensor.selects"
      | "sensor.sensors"
      | "sensor.sirens"
      | "sensor.suns"
      | "sensor.stt"
      | "sensor.switches"
      | "sensor.texts"
      | "sensor.times"
      | "sensor.tts"
      | "sensor.vacuums"
      | "sensor.update"
      | "sensor.water_heaters"
      | "sensor.weather"
      | "sensor.zones"
      | "sensor.udm_unifios"
      | "sensor.all_standby_power"
      | "sensor.all_standby_energy";
  }
}
